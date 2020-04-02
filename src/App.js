import React from "react";
import { Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu.js';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage.js';
import SearchForm from './components/SearchForm/SearchForm';
import EpisodeList from './components/EpisodeComponents/EpisodeList';
import EpisodeCharactersList from './components/EpisodeComponents/EpisodeCharactersList';

export default function App() {
  return (
    <main data-testid='app'>
      <NavMenu />
      <Header />
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route exact path='/characterlist' component={SearchForm} />
        <Route path='/episodelist' component={EpisodeList} />
        <Route path='/episode/:id/characters' component={EpisodeCharactersList} />
      </Switch>
      {/* <Route path='/episodecharacters' component={EpisodeCharactersList} /> */}
    </main>
  );
}

