import React, { useEffect } from 'react';
import axios from 'axios';

const EpisodeListAPI = 'https://rickandmortyapi.com/api/episode/';

export default function EpisodeList() {
  useEffect(() => {
    axios
      .get(`${EpisodeListAPI}`)
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  })

  return (
    <div>
      <h2>Episode List</h2>
    </div>
  )
}
