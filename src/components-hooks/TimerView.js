import React, { useState, useEffect } from 'react';

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  let secs = (seconds % 60).toString().padStart(2, '0');
  return `${mins}:${secs}`;
}

function TimerView(props) {
  const [seconds, setSeconds] = useState(0);
  const [isTiming, setIsTiming] = useState(false);

  function toggleTiming() {
    setIsTiming(!isTiming);
  }

  function handleReset() {
    setSeconds(0);
    setIsTiming(false);
  }

  return (
    <div className="TimerView">
      <h1>{formatTime(seconds)}</h1>
      <div className="buttons is-centered my-2">
        <button className="button" onClick={toggleTiming}>
          {isTiming ? 'PAUSE' : 'START'}
        </button>
        <button className="button" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default TimerView;
