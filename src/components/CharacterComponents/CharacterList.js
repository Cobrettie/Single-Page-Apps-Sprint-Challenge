import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "../SearchForm/SearchForm";
import CharacterCard from './CharacterCard';
import { CharacterCardsContainer, ButtonContainer, StyledButton } from "./CharacterStyles";

const charactersAPI = 'https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/';
const apiPagePrefix = '?page=';

export default function CharacterList() {
  const [listOfCharacters, setListOfCharacters] = useState([]);
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
      .get(`${charactersAPI}${apiPagePrefix}${apiPageNumber}`)
      .then(response => {
        console.log(response)
        const allCharacters = response.data.results;
        setListOfCharacters(allCharacters)
        if (response.data.info.next === '') {
          setApiPageNumber(1)
        }
        if (response.data.info.prev === '') {
          setApiPageNumber(1)
        }
      })
      .catch(err => console.log(err))
  }, [apiPageNumber]);

  return (
    <div>
      <ButtonContainer>
        <StyledButton onClick={() => decrementApiPageNumber()}>Previous Page</StyledButton>
        <StyledButton onClick={() => incrementApiPageNumber()}>Next Page</StyledButton>
      </ButtonContainer>
      <SearchForm listOfCharacters={listOfCharacters} />
      <ButtonContainer>
        <StyledButton onClick={() => decrementApiPageNumber()}>Previous Page</StyledButton>
        <StyledButton onClick={() => incrementApiPageNumber()}>Next Page</StyledButton>
      </ButtonContainer>
    </div>
  );
}
