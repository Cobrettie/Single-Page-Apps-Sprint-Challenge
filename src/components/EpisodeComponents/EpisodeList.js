import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { EpisodeCardsContainer } from './EpisodeStyles';

import EpisodeCharactersList from './EpisodeCharactersList';


const EpisodeListAPI = 'https://rickandmortyapi.com/api/episode/';

export default function EpisodeList(props) {
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
      <EpisodeCardsContainer>
        {listOfEpisodes.map(episode => {
          return (
            <EpisodeCard props={props} episodes={episode} key={episode.id} />
          )
        })}
      </EpisodeCardsContainer>

      {/* <Route 
        path='/episode/:id/characters' 
        // component={EpisodeCharactersList} 
        render={() => <EpisodeCharactersList listOfEpisodes={listOfEpisodes} />}
      /> */}
    </div>
  )
}
