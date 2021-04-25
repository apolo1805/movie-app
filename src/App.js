import './App.css';
import React from 'react';
import ActorsPage from './Pages/ActorsPage/ActorsPage';
import MoviesPage from './Pages/MoviesPage/MoviesPage';

function App() {  

  return (
    <div className="app">
      {/* <ActorsPage/> */}
      <MoviesPage/>
    </div>
  );
}

export default App;
