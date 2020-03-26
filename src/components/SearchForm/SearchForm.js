import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from '../CharacterComponents/CharacterCard';
import { CharacterCardsContainer } from '../CharacterComponents/CharacterStyles';
import { SearchFormSection, StyledForm, StyledInput } from './SearchFormStyles';

const apiNamePrefix = '&name=';
const apiPagePrefix = '?page=';

export default function SearchForm({ charactersAPI, apiPageNumber }) {
  const [filteredList, setFilteredList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get(`${charactersAPI}${apiPagePrefix}${apiPageNumber}${apiNamePrefix}${query}`)
      .then(response => {
        console.log(response)
        setFilteredList(response.data.results)
      })
      .catch(err => console.log(err))
  }, [query, apiPageNumber])

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

      {query === '' ? null : 
        <CharacterCardsContainer>
          {console.log(filteredList)}
          {filteredList.map(character => {
            return (
              <CharacterCard character={character} key={character.id} />
            )
          })}
        </CharacterCardsContainer>}
    </SearchFormSection>
  );
}