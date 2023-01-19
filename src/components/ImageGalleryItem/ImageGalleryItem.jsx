import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ material }) => {
  const { webformatURL, largeImageURL, tags } = material;

  return (
    <Item>
      <Image src={webformatURL} alt={tags} />
    </Item>
  );
};

ImageGalleryItem.PropTypes = {
  material: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
