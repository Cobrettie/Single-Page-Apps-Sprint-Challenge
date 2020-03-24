import styled from 'styled-components';
import { Link } from 'react-router-dom';

// CharacterCard component 

export const SingleCard = styled.div`
  border: 1px solid #373737;
  border-radius: 5px;
  width: 20%;
  margin: 20px;
  padding: 10px 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #373737;
`;

export const ImgContainer = styled.div`
  text-align: center;
`;

export const SingleCardImg = styled.img`
  border-radius: 5px;
  width: 100%;
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