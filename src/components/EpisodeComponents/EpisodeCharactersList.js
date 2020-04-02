import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../CharacterComponents/CharacterCard';

export default function EpisodeCharactersList(props) {
  console.log(props);
  const [episodeCharacters, setEpisodeCharacters] = useState([]);
  const [test, setTest] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/episode/${props.match.params.id}`)
      .then(response => {
        console.log(response)
        const allCharacters = response.data.characters
        setEpisodeCharacters(allCharacters)
      })
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
    episodeCharacters.map(character => {
      axios
        .get(`${character}`)
        .then(response => {
          console.log(response)
          test.push(response.data.name)
        })
        .catch(err => console.log(err))
    })
  }, [episodeCharacters])

  console.log(test)

  return (
    <div>
      <h2>Episode Characters List</h2>
    </div>
  )
}