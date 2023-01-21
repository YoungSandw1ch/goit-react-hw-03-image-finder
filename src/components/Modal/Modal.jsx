import { Box } from 'components/Common/Box';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWrapper } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');
export class Modal extends Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClick);
  }

  onEscapeClick = e => {
    if (e.code !== 'Escape') return;
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  handleBackdropClick = e => {
    if (e.target !== e.currentTarget) return;
    this.toggleModal();
  };

  render() {
    // const { children } = this.props;
    const { handleBackdropClick } = this;

    return createPortal(
      <Backdrop onClick={handleBackdropClick}>
        <ModalWrapper>
          <Box as="img" src="" alt="" />
        </ModalWrapper>
      </Backdrop>,
      modalRoot
    );
  }
}
