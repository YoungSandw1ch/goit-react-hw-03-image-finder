import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWrapper, LargeImage } from './Modal.styled';
import { AnimatePresence } from 'framer-motion';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }

  onEscapeClick = e => {
    if (e.code !== 'Escape') return;
    this.props.closeModal();
  };

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    this.props.closeModal();
  };

  render() {
    const { handleBackdropClick } = this;
    const { image } = this.props;
    const isVisible = image ? true : false;

    return createPortal(
      <AnimatePresence>
        {isVisible && (
          <Backdrop
            onClick={handleBackdropClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ModalWrapper
              initial={{ scale: 0.1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.1 }}
            >
              <LargeImage src={image} alt={image} />
            </ModalWrapper>
          </Backdrop>
        )}
      </AnimatePresence>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  image: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
};
