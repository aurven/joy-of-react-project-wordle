import React from 'react';

const keyboardMatrix = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
];

function Keyboard({ userGuesses }) {

  // if (userGuesses.length > 0) {
    const correct = new Set();
    const incorrect = new Set();
    const misplaced = new Set();
    userGuesses.forEach?.(guess => {
      guess.forEach(letter => {
        switch (letter.status) {
          case 'correct':
            correct.add(letter.letter);
            break;
  
          case 'incorrect':
            incorrect.add(letter.letter);
            break;
  
          case 'misplaced':
            misplaced.add(letter.letter);
            break;
  
          default:
            break;
        }
      });
    });

  const getKeyClass = key => {
    if (correct.has(key)) return 'correct';
    if (misplaced.has(key)) return 'misplaced';
    if (incorrect.has(key)) return 'incorrect';
    return '';
  }

  return (
    <div className="keyboard-wrapper">
      {keyboardMatrix.map(row => {
        return (
          <div key={crypto.randomUUID()}
            className="keyboard-row">
            {row.map(keyLetter => {
              const keyClass = getKeyClass(keyLetter);
              return (
                <div key={crypto.randomUUID()}
                  className={'keyboard-key ' + keyClass}
                >{keyLetter}</div>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Keyboard;
