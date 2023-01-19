import {
  Header,
  SearchForm,
  SearchFormButton,
  BtnIcon,
  Input,
} from './Searchbar.styled';
import { toast } from 'react-toastify';

const toastOptions = { autoClose: 2500, closeButton: true };

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.text.value.trim();
    if (!query) {
      toast.warn('Write something to search', toastOptions);
      return;
    }
    onSubmit(query);
    e.target.reset();
  };

  return (
    <Header>
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
};
