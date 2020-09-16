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

import React from 'react';

const code = '#$!2 489-&$27 351@&$27 48519@&$27 35@&&$27@'; // code that you are trying to match up
let guess = '';

/*********** 
  View One
************/

function ViewOne({ clicksLeft }) {
  return <div>View One</div>;
}

/*********** 
  View Two
************/

function ViewTwo() {
  return <div>View Two</div>;
}

/****************
  Exercise View
*****************/

function ExerciseView(props) {
  return <div className="ExerciseView container">ExerciseView</div>;
}

export default ExerciseView;
