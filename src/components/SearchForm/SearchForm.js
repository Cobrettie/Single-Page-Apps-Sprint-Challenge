import React, { useState, useEffect } from "react";
import CharacterCard from '../CharacterComponents/CharacterCard';
import { CharacterCardsContainer } from '../CharacterComponents/CharacterStyles';

import { SearchFormSection, StyledForm, StyledInput } from './SearchFormStyles';

export default function SearchForm({ listOfCharacters }) {
  // console.log(listOfCharacters)
  const [filteredList, setFilteredList] = useState([]);
  const [query, setQuery] = useState('');

  // console.log('listOfChars', filteredList)

  useEffect(() => {
    const filteredCharacters = listOfCharacters.filter(character => 
      character.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(filteredCharacters);
  }, [query])

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  return (
    <SearchFormSection>
      <StyledForm>
        <StyledInput
          type='text'
          onChange={handleInputChange}
          value={query}
          name='name'
          placeholder='Search by name'
        />
      </StyledForm>
      <CharacterCardsContainer>
        {filteredList.map(character => {
          return (
            <CharacterCard character={character} key={character.id} />
          )
        }  
        )}
      </CharacterCardsContainer>
    </SearchFormSection>
  );
}
