import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from '../CharacterComponents/CharacterCard';
import { CharacterCardsContainer, ButtonContainer, StyledButton } from '../CharacterComponents/CharacterStyles';
import { SearchFormSection, StyledForm, StyledInput } from './SearchFormStyles';

const charactersAPI = 'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/';
const apiNamePrefix = '&name=';
const apiPagePrefix = '?page=';

export default function SearchForm() {
  const [filteredList, setFilteredList] = useState([]);
  const [query, setQuery] = useState('');

  const [apiPageNumber, setApiPageNumber] = useState(1);
  const [availablePages, setAvailablePages] = useState();

  const incrementApiPageNumber = () => {
    return (
      setApiPageNumber(apiPageNumber + 1)
    )
  }

  const decrementApiPageNumber = () => {
    return (
      setApiPageNumber(apiPageNumber - 1)
    )
  }

  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    axios
      .get(`${charactersAPI}${apiPagePrefix}${apiPageNumber}${apiNamePrefix}${query}`)
      .then(response => {
        // console.log(response)
        setFilteredList(response.data.results)
        setAvailablePages(response.data.info.pages)
      })
      .catch(err => console.log(err))
  }, [query, apiPageNumber])

  if (apiPageNumber > availablePages || apiPageNumber < 1) {
    setApiPageNumber(1)
  }

  return (
    <div>
      <ButtonContainer>
        <StyledButton onClick={() => decrementApiPageNumber()}>Previous Page</StyledButton>
        <p>Page {apiPageNumber} of {availablePages}</p>
        <StyledButton onClick={() => incrementApiPageNumber()}>Next Page</StyledButton>
      </ButtonContainer>

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
          {/* {console.log(filteredList)} */}
          {filteredList.map(character => {
            return (
              <CharacterCard character={character} key={character.id} />
            )
          })}
        </CharacterCardsContainer>
      </SearchFormSection>

      <ButtonContainer>
        <StyledButton onClick={() => decrementApiPageNumber()}>Previous Page</StyledButton>
        <p>Page {apiPageNumber} of {availablePages}</p>
        <StyledButton onClick={() => incrementApiPageNumber()}>Next Page</StyledButton>
      </ButtonContainer>
    </div>
  );
}