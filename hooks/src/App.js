import React from 'react';
import VideoList from './components/VideoList';

function App() {
  var uuid = require('uuid');
  const uuidv1 = require('uuid/v1');

  return (
    <div className="App">
       <h2 align = "center"> Welcome </h2>
       < VideoList / >
    </div>
  );
}

export default App;
