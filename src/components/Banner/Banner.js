import React from 'react';
import ResetButton from '../ResetButton';

function Banner({ guessed, answer, numberOfGuesses, resetHandler }) {
  const bannerClass = guessed ? 'happy' : 'sad';

  return (
    <div className={bannerClass + " banner"}>
      {guessed ? (
        <p>
          <strong>Congratulations!</strong> Got it in <strong>{numberOfGuesses} guesses</strong>.
        </p>
      ) : (
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      )}
      <ResetButton resetHandler={resetHandler} />
    </div>
  );
}

export default Banner;
