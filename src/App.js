import './App.css';
import React from 'react';
import ActorsPage from './Pages/ActorsPage/ActorsPage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';
import { HashRouter, Router, Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';

function App() {  

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/actors">
          <ActorsPage/>
        </Route>
        <Route exact path="/movies">
          <MoviesPage/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
