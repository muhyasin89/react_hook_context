import React from 'react';
import './App.css';

import VideoList from './components/VideoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome Home to Hook</h1>
        <VideoList />
      </header>
    </div>
  );
}

export default App;
