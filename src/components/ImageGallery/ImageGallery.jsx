import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { Loader } from 'components/Common/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

export const ImageGallery = ({ materials, isLoading, setPage, hasMore }) => {
  const length = materials.length;
  const nextPage = () => setPage();

  return (
    <InfiniteScroll
      dataLength={length}
      next={nextPage}
      hasMore={hasMore}
      loader={isLoading && <Loader />}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <List>
        {materials.map(material => (
          <ImageGalleryItem key={material.id} material={material} />
        ))}
      </List>
    </InfiniteScroll>
  );
};

ImageGallery.propTypes = {
  materials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  setPage: PropTypes.func.isRequired,
};
