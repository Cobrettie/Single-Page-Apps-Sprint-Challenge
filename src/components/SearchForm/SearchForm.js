import React, { useState, useEffect } from "react";
import axios from 'axios';
import CharacterCard from '../CharacterComponents/CharacterCard';
import { CharacterCardsContainer } from '../CharacterComponents/CharacterStyles';
import { SearchFormSection, StyledForm, StyledInput } from './SearchFormStyles';

const apiNamePrefix = '?name=';

export default function SearchForm({ charactersAPI, listOfCharacters }) {
  // console.log(charactersAPI)
  const [filteredList, setFilteredList] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    axios
      .get(`${charactersAPI}${apiNamePrefix}${query}`)
      .then(response => {
        console.log(response)
        setFilteredList(response.data.results)
      })
      .catch(err => console.log(err))






    // const filteredCharacters = listOfCharacters.filter(character => 
    //   character.name.toLowerCase().includes(query.toLowerCase())
    // );
    // setFilteredList(filteredCharacters);
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

      {filteredList.length === 0 ? 
      <section className="character-list">
        <CharacterCardsContainer>
          {listOfCharacters.map(character => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </CharacterCardsContainer>
      </section> 
      : null}

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
