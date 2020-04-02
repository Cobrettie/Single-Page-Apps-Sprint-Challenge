import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterComponents/CharacterCard';

export default function EpisodeCharactersList(props) {
  console.log(props);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${props.match.params.id}`)
      .then(response => {
        console.log(response)
        const allCharacters = response.data.characters
        setEpisodeCharacters(allCharacters);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h2>Episode Characters List</h2>
      {episodeCharacters.map(character => {
        return (
          // <CharacterCard character={character} key={character.id} />
          console.log(character)
        )
      })}
    </div>
  )
}