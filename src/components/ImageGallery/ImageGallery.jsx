import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';

export const ImageGallery = ({ materials }) => {
  return (
    <List class="gallery">
      {materials.map(material => (
        <ImageGalleryItem key={material.id} material={material} />
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  materials: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
};
