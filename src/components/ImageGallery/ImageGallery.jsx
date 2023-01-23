import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Loader } from 'components/Common/Loader';
import { Box } from 'components/Common/Box';

const endMessage = (
  <Box textAlign="center" fontWeight="semiBold">
    Yay! You have seen it all
  </Box>
);

export const ImageGallery = ({
  hits,
  isLoading,
  setPage,
  hasMore,
  openModal,
}) => {
  const length = hits.length;
  const nextPage = () => setPage();

  return (
    <InfiniteScroll
      dataLength={length}
      next={nextPage}
      hasMore={hasMore}
      loader={isLoading && <Loader />}
      endMessage={endMessage}
    >
      <List>
        {hits.map(hit => (
          <ImageGalleryItem key={hit.id} hit={hit} openModal={openModal} />
        ))}
      </List>
    </InfiniteScroll>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  hasMore: PropTypes.bool,
};
