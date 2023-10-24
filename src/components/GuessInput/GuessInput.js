import React from 'react';

import Banner from '../Banner';

function GuessInput({ guessesHandler, gameOn, guessed, answer, numberOfGuesses }) {
  const [userInput, setUserInput] = React.useState('');

  return (
    <form className="guess-input-wrapper" onSubmit={event => {
      event.preventDefault();
      console.log({ userInput })
      guessesHandler(userInput);
      setUserInput('');
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      
      <input id="guess-input" type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={userInput}
        disabled={!gameOn ? 'disabled' : ''}
        onChange={event => {
          const newValue = event.target.value.toUpperCase();
          setUserInput(newValue);
        }} />
      {!gameOn && (
        <Banner answer={answer} guessed={guessed} numberOfGuesses={numberOfGuesses} />
      )}
    </form>
  );
}

export default GuessInput;
