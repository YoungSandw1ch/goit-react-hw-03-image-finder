import { ThemeProvider } from 'styled-components';
import { theme } from 'constants/thema';
import { Box } from './Common/Box';
import { Searchbar } from './Searchbar';
import { Component } from 'react';

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box>
          <Searchbar />
        </Box>
      </ThemeProvider>
    );
  }
}
