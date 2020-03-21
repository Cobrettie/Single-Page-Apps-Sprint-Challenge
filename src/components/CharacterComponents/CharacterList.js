import React, { useEffect, useState } from "react";
import axios from 'axios';

import SearchForm from "../SearchForm";
import CharacterCard from './CharacterCard';

import { CharacterCardsContainer } from "./CharacterStyles";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [listOfCharacters, setListOfCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response)
        const allCharacters = response.data.results;
        setListOfCharacters(allCharacters)
      })
  }, []);

  return (
    <section className="character-list">
      <h2>Character List</h2>
      <SearchForm listOfCharacters={listOfCharacters} />
      <CharacterCardsContainer>
        {listOfCharacters.map(character => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </CharacterCardsContainer>
    </section>
  );
}
