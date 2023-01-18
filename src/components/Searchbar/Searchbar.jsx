import {
  Header,
  SearchForm,
  SearchFormButton,
  BtnIcon,
  Input,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(e.target.elements.text.value);
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
