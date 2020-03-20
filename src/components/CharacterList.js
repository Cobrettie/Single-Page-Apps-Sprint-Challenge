import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [listOfCharacters, setListOfCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
      .then(response => {
        const allCharacters = response.data.results;
        setListOfCharacters(allCharacters)
      })
  }, []);

  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
      <div className='characterCardsContainer'>
        {listOfCharacters.map(character => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </div>
    </section>
  );
}
