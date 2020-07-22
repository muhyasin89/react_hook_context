import React from 'react';
import SongList from './components/SongList';

function App() {
  var uuid = require('uuid');
  const uuidv1 = require('uuid/v1');

  return (
    <div className="App">
       <h2 align = "center"> Welcome </h2>
       <SongList />
    </div>
  );
}

export default App;
