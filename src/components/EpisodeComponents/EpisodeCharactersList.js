import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function EpisodeCharactersList({ listOfEpisodes }) {
  console.log(listOfEpisodes);
  return (
    <div>
      <h2>Episode Characters List</h2>
      {/* <p>{listOfEpisodes.name}</p> */}
    </div>
  )
}