import React from 'react';

function ResetButton({ resetHandler }) {
  return <button
    className="reset-button"
    onClick={(event) => {
      event.preventDefault();
      console.log("reset the game!")
      resetHandler();
    }}>Retry?</button>;
}

export default ResetButton;
