import React from 'react';
import './App.css';
import Router from './route/router';

export const redirect = React.createContext(false);

function App() {
  return (
    <div className="App">
      <header className="">
        <Router />
      
      </header>
    </div>
  );
}

export default App
