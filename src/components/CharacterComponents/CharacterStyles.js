import React from 'react';
import styled from 'styled-components';

// CharacterCard component styling

export const SingleCard = styled.div`
  border: 1px solid #373737;
  border-radius: 5px;
  width: 30%;
  margin: 20px;
  padding: 10px 20px;
`;

export const ImgContainer = styled.div`
  text-align: center;
`;

export const SingleCardImg = styled.img`
  border-radius: 5px;
`;

// CharacterList component styling

export const CharacterCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
