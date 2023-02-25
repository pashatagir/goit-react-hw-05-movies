import { useState } from 'react';
import { SearchForm, FormButton, FormInput } from './SearchBar.styled';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    const { value } = e.currentTarget;
    setQuery(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
    setQuery('');
  };
  return (
    <SearchForm onSubmit={handleSubmit}>
      <FormInput type="text" value={query} onChange={handleChange} />
      <FormButton type="submit">Search</FormButton>
    </SearchForm>
  );
};

export default SearchBar;
