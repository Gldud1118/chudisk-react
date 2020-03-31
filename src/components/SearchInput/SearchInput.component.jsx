import React from 'react';
import { SearchInputContainer } from './SearchInput.styles';

const SearchInput = () => {
  return (
    <>
      <SearchInputContainer
        type='text'
        placeholder='Search for files and folders'
      />
    </>
  );
};

export default SearchInput;
