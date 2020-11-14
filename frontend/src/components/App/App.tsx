import React from 'react';

import Login from "../Login/Login"
import ProjectsList from "../ProjectsList/ProjectsList"

import './App.css';

function App() {
  return (
    <div className="App" data-testid="App">
      <Login />
      <ProjectsList />
    </div>
  );
}

export default App;
