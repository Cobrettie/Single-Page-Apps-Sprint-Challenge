import styled from 'styled-components';
import { device } from '../../Breakpoints';

// CharacterCard component 

export const SingleCard = styled.div`
  border: 1px solid #373737;
  border-radius: 5px;
  width: 25%;
  max-width: 300px;
  overflow: hidden;
  margin: 20px;

  @media ${device.ancient} {
    width: 80%;
  }

  @media ${device.tablet} {
    width: 35%;
  }

  @media ${device.laptop} {
    width: 25%;
  }
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
  opacity: 1;
  margin: 0px;
  transition: opacity 0.5s ease 0s;
`;

export const HeaderNameContainer = styled.div`
  width: 100%;
  max-width: 100%;
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
  max-width: 250px;
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
    color: #ABD5EC;
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
  display: flex;
  max-width: 500px;
  margin: 40px auto 0px;
  text-align: center;
  width: 100%;

  @media ${device.ancient} {
    flex-direction: column;
  }

  @media ${device.mobileL} {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledButton = styled.button`
  font-size: 14px;
  background-color: #ABD5EC;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;

  @media ${device.ancient} {
    // width: 60%;
    font-size: 16px;
    padding: 10px 30px;
    margin: 20px auto;
  }

  @media ${device.mobileL} {
    font-size: 14px;
  }
`;