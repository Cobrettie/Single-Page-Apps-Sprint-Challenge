import React from "react";
import { Route } from 'react-router-dom';
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import CharacterList from "./components/CharacterList.js";

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <CharacterList />

      <Route exact path='/' component={WelcomePage} />
    </main>
  );
}
