import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';
import { EpisodeCardsContainer } from './EpisodeStyles';
import { ButtonContainer, StyledButton } from '../CharacterComponents/CharacterStyles';

const EpisodeListAPI = 'https://rickandmortyapi.com/api/episode/';
const apiPagePrefix = '?page=';

export default function EpisodeList(props) {
  const [listOfEpisodes, setListOfEpisodes] = useState([]);
  const [apiPageNumber, setApiPageNumber] = useState(1);
  const [availablePages, setAvailablePages] = useState();

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
        setAvailablePages(response.data.info.pages)
      })
      .catch(err => console.log(err))
  }, [apiPageNumber])

  if (apiPageNumber > availablePages || apiPageNumber < 1) {
    setApiPageNumber(1)
  }

  return (
    <div>
      <h2>Episode List</h2>
      <ButtonContainer>
        <StyledButton onClick={() => decrementApiPageNumber()}>Previous Page</StyledButton>
        <p>Page {apiPageNumber} of {availablePages}</p>
        <StyledButton onClick={() => incrementApiPageNumber()}>Next Page</StyledButton>
      </ButtonContainer>

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

      <ButtonContainer>
        <StyledButton onClick={() => decrementApiPageNumber()}>Previous Page</StyledButton>
        <p>Page {apiPageNumber} of {availablePages}</p>
        <StyledButton onClick={() => incrementApiPageNumber()}>Next Page</StyledButton>
      </ButtonContainer>
    </div>
  )
}
