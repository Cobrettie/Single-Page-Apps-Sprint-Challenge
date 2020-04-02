import React from "react";
import { Route } from 'react-router-dom';
import NavMenu from './components/NavMenu.js';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage.js';
import SearchForm from './components/SearchForm/SearchForm';
import EpisodeList from './components/EpisodeComponents/EpisodeList';

export default function App() {
  return (
    <main data-testid='app'>
      <NavMenu />
      <Header />

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characterlist' component={SearchForm} />
      <Route path='/episodelist' component={EpisodeList} />
      <Route path='/episodecharacters' component={EpisodeCharactersList} />
    </main>
  );
}

