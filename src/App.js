import React from 'react';
import './App.css';
import Router from './route/router';
import Person from './views/Person';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router />
        <Person />
      </header>
    </div>
  );
}

export default App;
