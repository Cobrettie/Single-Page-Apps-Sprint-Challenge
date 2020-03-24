import React from "react";
import { Route } from 'react-router-dom';
import NavMenu from './components/NavMenu.js';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterComponents/CharacterList';
import CharacterPage from './components/CharacterComponents/CharacterPage';

export default function App() {
  return (
    <main data-testid='app'>
      <NavMenu />
      <Header />

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characterlist' component={CharacterList} />
      {/* <Route
        path={`/character/2`}
        component={CharacterPage}
        // render={(character) => <CharacterPage {...character} /> }
      /> */}
    </main>
  );
}

