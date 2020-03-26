import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "../SearchForm/SearchForm";
import { ButtonContainer, StyledButton } from "./CharacterStyles";

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
        // console.log(response)
        const allCharacters = response.data.results;
        setListOfCharacters(allCharacters)
      })
      .catch(err => console.log(err))
  }, [apiPageNumber]);

  if (apiPageNumber > 25 || apiPageNumber < 1) {
    setApiPageNumber(1)
  }

  return (
    <div>
      <ButtonContainer>
        <StyledButton onClick={() => decrementApiPageNumber()}>Previous Page</StyledButton>
        <p>Page {apiPageNumber} of 25</p>
        <StyledButton onClick={() => incrementApiPageNumber()}>Next Page</StyledButton>
      </ButtonContainer>
      <SearchForm 
        listOfCharacters={listOfCharacters} 
        charactersAPI={charactersAPI} 
      />
      <ButtonContainer>
        <StyledButton onClick={() => decrementApiPageNumber()}>Previous Page</StyledButton>
        <p>Page {apiPageNumber} of 25</p>
        <StyledButton onClick={() => incrementApiPageNumber()}>Next Page</StyledButton>
      </ButtonContainer>
    </div>
  );
}
