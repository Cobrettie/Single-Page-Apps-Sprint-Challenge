import React, { useEffect, useState } from "react";
import axios from 'axios';

import SearchForm from "../SearchForm/SearchForm";
import CharacterCard from './CharacterCard';

import { CharacterCardsContainer } from "./CharacterStyles";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [listOfCharacters, setListOfCharacters] = useState([]);

  const charactersAPI = 'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/';
  const apiPagePrefix = '?page=';
  const apiPageNumber = '1'

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`${charactersAPI}${apiPagePrefix}${apiPageNumber}`)
      .then(response => {
        console.log(response)
        const allCharacters = response.data.results;
        setListOfCharacters(allCharacters)
      })
  }, []);

  return (
    <div>
      <SearchForm listOfCharacters={listOfCharacters} />
      <section className="character-list">
        <CharacterCardsContainer>
          {listOfCharacters.map(character => (
            <CharacterCard character={character} key={character.id} />
          ))}
        </CharacterCardsContainer>
      </section>
    </div>
  );
}
