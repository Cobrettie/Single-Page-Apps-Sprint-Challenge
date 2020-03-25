import styled from 'styled-components';
import { Link } from 'react-router-dom';

// CharacterCard component 

export const SingleCard = styled.div`
  border: 1px solid #373737;
  border-radius: 5px;
  width: 25%;
  max-width: 300px;
  overflow: hidden;
  margin: 20px;
`;

export const CardHeader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export const ImgContainer = styled.div`
  // text-align: center;
  width: 100%;
`;

export const SingleCardImg = styled.img`
  border-radius: 5px;
  max-width: 100%;
  opacity: 1;
  margin: 0px;
  transition: opacity 0.5s ease 0s;
`;

export const HeaderNameContainer = styled.div`
  width: 100%;
  opacity: 0.8;
  position: absolute;
  bottom: 0px;
  background: rgb(32, 35, 41);
  padding: 0.625rem;
  text-align: left;
`;

export const HeaderName = styled.h2`
  color: rgb(245, 245, 245);
  font-size: 1.625rem;
  font-weight: 400;
  font-stretch: expanded;
  margin: 0px;
`;

export const CardInfoContainer = styled.div`
  height: 100%;
  background: rgb(51, 51, 51);
  padding: 1.25rem;
`;

export const CardInfoP = styled.p`
  color: rgb(245, 245, 245);
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: left;
  border-bottom: 1px solid rgb(68, 68, 68);
  padding: 0.75rem 0px 0.375rem;

  span {
    color: dodgerblue;
    text-align: right;
  }
`;

// CharacterList component 

export const CharacterCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

// CharacterList component buttons

export const ButtonContainer = styled.div`
  margin: 40px auto 0px;
  text-align: center;
`;

export const StyledButton = styled.button`
  font-size: 14px;
  background-color: dodgerblue;
  color: #fafafa;
  border: 1px solid #373737;
  border-radius: 5px;
  margin: 0 10px;
`;