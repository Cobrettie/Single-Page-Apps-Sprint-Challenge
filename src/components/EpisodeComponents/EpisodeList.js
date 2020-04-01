import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

const EpisodeListAPI = 'https://rickandmortyapi.com/api/episode/';

export default function EpisodeList() {
  const [listOfEpisodes, setListOfEpisodes] = useState([]);

  useEffect(() => {
    axios
      .get(`${EpisodeListAPI}`)
      .then(response => {
        console.log(response)
        const allEpisodes = response.data.results
        setListOfEpisodes(allEpisodes)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h2>Episode List</h2>
      {listOfEpisodes.map(episode => {
        return (
          <EpisodeCard episodes={episode} key={episode.id} />
        )
      })}
    </div>
  )
}
