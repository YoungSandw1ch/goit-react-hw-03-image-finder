import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'components/Common/GlobalStyle';
import { theme } from 'constants/thema';
import { Box } from './Common/Box';
import { Searchbar } from './Searchbar';
import { Component } from 'react';
import { getImages } from 'services';
import { toast, ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    hits: [],
    totalHits: 0,
    isLoading: false,
    error: null,
    modalImage: null,
  };

  async componentDidUpdate(_, pS) {
    try {
      const { query, page } = this.state;
      if (!query) return;
      if (pS.query !== query || pS.page !== page) {
        this.setState({ isLoading: true });
        const data = await getImages(query, page);
        const hits = data.hits;

        if (!hits.length) {
          toast.error('Ups, nothing to search');
        }

        this.setState(state => ({
          hits: [...state.hits, ...hits],
          isLoading: false,
          totalHits: data.totalHits,
        }));
      }
    } catch (error) {
      this.setState({ error });
      console.log(error.message);
    }
  }

  setPage = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  formSubmit = query => {
    if (query === this.state.query) return;
    this.setState({ query, page: 1, hits: [], error: null, totalHits: 0 });
  };

  openModal = modalImage => {
    this.setState({ modalImage });
  };

  closeModal = () => {
    this.setState({ modalImage: null });
  };

  render() {
    const { formSubmit, setPage, closeModal, openModal } = this;
    const { hits, isLoading, totalHits, page, modalImage } = this.state;
    const hasMore = totalHits === hits.length && page > 1 ? false : true;

    return (
      <ThemeProvider theme={theme}>
        <Box>
          <Searchbar onSubmit={formSubmit} />
          <ImageGallery
            hits={hits}
            setPage={setPage}
            openModal={openModal}
            isLoading={isLoading}
            hasMore={hasMore}
          />
          <Modal closeModal={closeModal} image={modalImage} />
        </Box>
        <ToastContainer />
        <GlobalStyle />
      </ThemeProvider>
    );
  }
}
