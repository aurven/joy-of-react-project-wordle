import React from 'react';

function Banner({ guessed, answer, numberOfGuesses }) {
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
    </div>
  );
}

export default Banner;
