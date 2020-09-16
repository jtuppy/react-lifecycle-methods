/**  Lifecycle Methods Exercise - Match the Code

The goal of this exercise is to use the given components and lifecycle methods to properly match up
the 'guess' string to the 'code' string. There are 3 components in the exercise, ViewOne, ViewTwo, and ExerciseView.
ExerciseView is mounted right away, then the user has to click the button 5 times. After the 5th button click, the code
should match the guess. A message will be displayed if it is right or wrong (HINT: take a look at how the msg is shown...)
Change the App view and go back to the exercise view if you want to reset the state.

RULES:
- Same rules don't really apply for function components, so just try to match it
- Code modified slightly to represent the effects calling order during cleanup

*/

import React, { useRef, useState, useLayoutEffect } from 'react';

const code = '#$!2 489-&$27 351@&$27 48519@&$27 35@&&$27@'; // code that you are trying to match up
let guess = '';

/*********** 
  View One
************/

function ViewOne({ clicksLeft }) {
  const componentJustMounted = useRef(true);
  const viewRef = useRef(null);
  const prevHeight = useRef(null);

  const heights = [140, 155, 160, 155, 160, 165];
  const height = heights[clicksLeft];

  if (componentJustMounted.current) {
    guess += '!';
  }

  useLayoutEffect(() => {
    if (clicksLeft !== 0 && !componentJustMounted.current) {
      guess += '5';

      if (prevHeight.current > viewRef.current.offsetHeight) {
        guess += '1';
      }
    }

    prevHeight.current = viewRef.current.offsetHeight;
    componentJustMounted.current = false;
  });

  // derived state
  guess += '2';

  // should component update
  if (!componentJustMounted.current) {
    guess += '7';
  }

  // render
  if (clicksLeft !== 0) {
    guess += ' ';
  }

  return (
    <div style={{ height }} ref={viewRef}>
      View One
    </div>
  );
}

/*********** 
  View Two
************/

function ViewTwo() {
  const componentJustMounted = useRef(true);
  if (componentJustMounted.current) {
    guess += '4';
  }

  useLayoutEffect(() => {
    guess += '9';
    componentJustMounted.current = false;

    return () => {
      guess += '3';
    };
  }, []);

  guess += '8';
  return <div>View Two</div>;
}

/****************
  Exercise View
*****************/

function ExerciseView(props) {
  const componentJustMounted = useRef(true);
  const msgRef = useRef(null);
  const [clicksLeft, setClicks] = useState(5);
  const stopUpdateRef = useRef(true);

  if (componentJustMounted.current) {
    guess = '';
    guess += '#';
  }

  useLayoutEffect(() => {
    if (!componentJustMounted.current) {
      if (clicksLeft === 0 || stopUpdateRef.current) {
        guess += '@';
      }

      if (clicksLeft <= 0) {
        console.log(guess);
        if (code === guess) {
          msgRef.current.textContent = 'Correct Code';
          msgRef.current.classList.add('has-background-success');
        } else {
          msgRef.current.textContent = 'Incorrect Code';
          msgRef.current.classList.add('has-background-danger');
        }
      }
    } else {
      guess += '-';
    }
    componentJustMounted.current = false;
  });

  // should component update
  if (!componentJustMounted.current) {
    guess += '&';
  }

  if (clicksLeft === 0 || stopUpdateRef.current) {
    guess += '$';
  }

  const handleClick = () => {
    if (clicksLeft > 0) {
      if (clicksLeft === 2 && stopUpdateRef.current) {
        setClicks(clicksLeft);
        stopUpdateRef.current = false;
      } else if (clicksLeft === 2) {
        setClicks(0);
      } else {
        setClicks(clicksLeft - 1);
      }
    }
  };

  return (
    <div className="ExerciseView container">
      <button className="button" onClick={handleClick}>
        CLICK ME
      </button>
      <p>Clicks Left: {clicksLeft}</p>
      {clicksLeft <= 0 ? <p ref={msgRef} className="msg"></p> : null}
      <ViewOne clicksLeft={clicksLeft} />
      {clicksLeft % 2 ? <ViewTwo clicksLeft={clicksLeft} /> : null}
    </div>
  );
}

export default ExerciseView;
