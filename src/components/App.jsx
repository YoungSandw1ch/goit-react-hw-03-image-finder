import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/thema';
import { Box } from './Common/Box';
import { Searchbar } from './Searchbar';
import { Component } from 'react';
import { getImages } from 'services';
import { toast, ToastContainer } from 'react-toastify';
import { ImageGallery } from './ImageGallery';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    materials: [],
    totalMaterial: 0,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(_, pS) {
    try {
      const { query, page } = this.state;
      if (pS.query !== query || pS.page !== page) {
        this.setState({ isLoading: true });
        const data = await getImages(query, page);
        const materials = data.hits;
        if (!materials.length) {
          toast.error('Ups, nothing to search');
        }
        this.setState(state => ({
          materials: [...state.materials, ...materials],
          isLoading: false,
          totalMaterial: data.totalHits,
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

  handleSubmit = query => {
    this.setState({ query, page: 1, materials: [], error: null });
  };

  render() {
    const { handleSubmit, setPage } = this;
    const { materials, isLoading, totalMaterial, page } = this.state;
    const hasMore =
      totalMaterial === materials.length && page > 1 ? false : true;

    return (
      <ThemeProvider theme={theme}>
        <Box>
          <ToastContainer />
          <Searchbar onSubmit={handleSubmit} />
          <ImageGallery
            materials={materials}
            setPage={setPage}
            isLoading={isLoading}
            hasMore={hasMore}
          />
        </Box>
      </ThemeProvider>
    );
  }
}
