import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/thema';
import { Box } from './Common/Box';
import { Searchbar } from './Searchbar';
import { Component } from 'react';
import { getImages } from 'services';

export class App extends Component {
  state = {
    query: '',
    page: 1,
  };

  componentDidUpdate = async (_, pS) => {
    const { query, page } = this.state;
    if (query && pS.query !== query) {
      const response = await getImages(query, page);
      console.log(response);
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
          <Searchbar onSubmit={setQuery} />
        </Box>
      </ThemeProvider>
    );
  }
}
