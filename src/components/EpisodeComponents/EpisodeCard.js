import React from 'react';
import { SingleCard } from './EpisodeStyles';

export default function EpisodeCard({ episodes }) {
  const {name, air_date, episode, characters } = episodes;

  return (
    <SingleCard>
      <h2>{name}</h2>
    </SingleCard>
  )
}