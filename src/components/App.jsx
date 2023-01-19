import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/thema';
import { Box } from './Common/Box';
import { Searchbar } from './Searchbar';
import { Component } from 'react';
import { getImages } from 'services';
import { ToastContainer } from 'react-toastify';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    materials: [],
  };

  componentDidUpdate = async (_, pS) => {
    const { query, page } = this.state;
    if (pS.query !== query || pS.page !== page) {
      const materials = await getImages(query, page);
      this.setState({ materials });

      console.log(materials);
    }
  };

  setQuery = query => {
    console.log(query);
    this.setState({ query });
  };

  render() {
    const { setQuery } = this;
    return (
      <ThemeProvider theme={theme}>
        <Box>
          <ToastContainer />
          <Searchbar onSubmit={setQuery} />
        </Box>
      </ThemeProvider>
    );
  }
}
