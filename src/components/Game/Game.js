import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessResults from '../GuessResults';
import GuessInput from '../GuessInput';
import Keyboard from '../Keyboard';


function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [userGuesses, setUserGuesses] = React.useState([]);
  const [guessed, setGuessed] = React.useState(false);
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  console.info(userGuesses);

  function guessesHandler(value) {
    setUserGuesses([...userGuesses, value]);
    setGuessed(value === answer);
  }

  function resetGame() {
    setAnswer(sample(WORDS));
    setUserGuesses([]);
    setGuessed(false);
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
        resetHandler={resetGame} 
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
