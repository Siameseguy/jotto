import React from 'react';
import './App.css';

import GuessedWords from './Components/GuessedWords/GuessedWords';
import Congrats from './Components/Congrats/Congrats';

function App() {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'train', letterMatchCount: 3}
      ]} />
    </div>
  );
}

export default App;
