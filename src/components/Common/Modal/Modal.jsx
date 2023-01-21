import { Component } from 'react';
import { Box } from '../Box';

export class Modal extends Component {
  render() {
    return (
      <Box>
        <Box>{children}</Box>
      </Box>
    );
  }
}
