import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { EpisodeCardsContainer } from './EpisodeStyles';

const EpisodeListAPI = 'https://rickandmortyapi.com/api/episode/';
const apiPagePrefix = '?page=';

export default function EpisodeList(props) {
  const [listOfEpisodes, setListOfEpisodes] = useState([]);
  const [apiPageNumber, setApiPageNumber] = useState(1);

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

  useEffect(() => {
    axios
      .get(`${EpisodeListAPI}${apiPagePrefix}${apiPageNumber}`)
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
      <EpisodeCardsContainer>
        {listOfEpisodes.map(episode => {
          return (
            <EpisodeCard 
              props={props} 
              episodes={episode} 
              key={episode.id} 
            />
          )
        })}
      </EpisodeCardsContainer>
    </div>
  )
}
