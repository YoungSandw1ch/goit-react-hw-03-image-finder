import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ hit, openModal }) => {
  const { webformatURL, tags, largeImageURL } = hit;
  const handleImgClick = () => {
    openModal(largeImageURL);
  };

  return (
    <Item>
      <Image src={webformatURL} alt={tags} onClick={handleImgClick} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  hit: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  openModal: PropTypes.func.isRequired,
};
