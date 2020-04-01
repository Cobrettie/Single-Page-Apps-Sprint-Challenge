import React from "react";
import { Route } from 'react-router-dom';
import NavMenu from './components/NavMenu.js';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage.js';
import SearchForm from './components/SearchForm/SearchForm';

export default function App() {
  return (
    <main data-testid='app'>
      <NavMenu />
      <Header />

      <Route exact path='/' component={WelcomePage} />
      <Route path='/characterlist' component={SearchForm} />
    </main>
  );
}

