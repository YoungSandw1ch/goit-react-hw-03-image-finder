import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  BtnIcon,
  Input,
  Logo,
} from './Searchbar.styled';
import { toast } from 'react-toastify';
import { Component } from 'react';

const toastOptions = { autoClose: 2500, closeButton: true };

export class Searchbar extends Component {
  state = {
    isWrap: true,
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    const query = e.target.elements.text.value.trim();
    if (!query) {
      toast.warn('Write something to search', toastOptions);
      onSubmit(query);
      this.setState({ isWrap: true });
      return;
    }
    onSubmit(query);
    this.setState({ isWrap: false });
    e.target.reset();
  };

  render() {
    const { isWrap } = this.state;
    const { handleSubmit } = this;
    return (
      <Header isWrap={isWrap}>
        <Logo isWrap={isWrap}>Finder</Logo>

        <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit" aria-label="search">
            <BtnIcon />
          </SearchFormButton>

          <Input
            name="text"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
