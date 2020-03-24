import React from 'react';
import { Route } from 'react-router-dom';

export default function CharacterPage({ character }) {
  console.log(character);
  return (
    <div>
      <h2>CharacterPage component</h2>

      <Route
        path={`${character.path}/:characterid`}
        // component={CharacterPage}
        render={(character) => (
          <CharacterPage {...character} /> 
        )}
      />
    </div>
  )
}