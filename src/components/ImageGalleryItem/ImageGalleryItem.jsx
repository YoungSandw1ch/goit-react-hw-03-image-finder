import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ material }) => {
  const { webformatURL, tags } = material;

  return (
    <Item>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  material: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    // largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};
