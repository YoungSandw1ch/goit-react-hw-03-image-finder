import { InfinitySpin } from 'react-loader-spinner';
import { Box } from '../Box';

export const Loader = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <InfinitySpin width="200" color="#3f51b5" />
    </Box>
  );
};
