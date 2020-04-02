import styled from 'styled-components';

export const EpisodeCardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SingleCard = styled.div`
  border: 1px solid #373737;
  border-radius: 5px;
  width: 25%;
  max-width: 300px;
  overflow: hidden;
  margin: 20px;
`;

export const HeaderNameContainer = styled.div`
  width: 100%;
  max-width: 100%;
  opacity: 0.8;
  background: rgb(32, 35, 41);
  padding: 0.625rem;
  text-align: left;
`;

export const HeaderNameH2 = styled.h2`
  color: rgb(245, 245, 245);
  font-size: 1.4rem;
  font-weight: 400;
  margin: 0px;
  max-width: 250px;
`;

export const InfoContainerDiv = styled.div`
  background: rgb(51, 51, 51);
  padding: 1.25rem;
  height: 100%;
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