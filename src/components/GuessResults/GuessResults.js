import React from 'react';
import { range } from '../../utils'

function GuessResults({ userGuesses, maxGuesses }) {
  return (
    <div className="guess-results">
      {/* {userGuesses.map(guess => (
        <p key={guess} className="guess">{guess}</p>
      ))} */}
      {range(0, maxGuesses).map(rowIndex => {
        const guess = userGuesses[rowIndex] || null;

        return (
          <p key={rowIndex} className="guess">
            {guess ? guess.map(guessedLetter => {
              const status = guessedLetter.status;
              const letter = guessedLetter.letter;

              return (
                <span key={crypto.randomUUID()}
                  className={'cell ' + status}>
                  {letter}
                </span>
              )
            }) : range(0, 5).map(dummy => <span key={dummy} className="cell" />)}
          </p>
        )
      })}
    </div>
  );
}

export default GuessResults;
