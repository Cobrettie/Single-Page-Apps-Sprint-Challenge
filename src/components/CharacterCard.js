import React from "react";

export default function CharacterCard({ character }) {
  const { id, name, status, species, type, gender } = character
  console.log(character);
  return (
    <div>
      <h2>{name}</h2>
    </div>
  );
}
