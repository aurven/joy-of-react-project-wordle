import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [guessed, setGuessed] = React.useState(false);
  console.info(userGuesses);

  function guessesHandler(value) {
    setUserGuesses([...userGuesses, value]);
    setGuessed(value === answer);
  }

  const checkedUserGuesses = userGuesses.map(guess => (
    checkGuess(guess, answer)
  ));

  const gameOn = !guessed && userGuesses.length < NUM_OF_GUESSES_ALLOWED;
  console.log(`The game is ${gameOn ? 'ON!!!' : 'OFF...'}`)

  return (
    <>
      <GuessResults userGuesses={checkedUserGuesses}
        maxGuesses={NUM_OF_GUESSES_ALLOWED}
      />
      <GuessInput guessesHandler={guessesHandler} 
        gameOn={gameOn}
        guessed={guessed}
        answer={answer}
        numberOfGuesses={userGuesses.length}
      />
      <Keyboard userGuesses={checkedUserGuesses} />
    </>
  );
}

export default Game;
