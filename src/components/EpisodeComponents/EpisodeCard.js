import React from 'react';

export default function EpisodeCard({ episodes }) {
  const {name, air_date, episode, characters } = episodes;

  return (
    <div>
      <h2>{name}</h2>
    </div>
  )
}