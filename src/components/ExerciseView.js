/**  Lifecycle Methods Exercise - Match the Code

The goal of this exercise is to use the given components and lifecycle methods to properly match up
the 'guess' string to the 'code' string. There are 3 components in the exercise, ViewOne, ViewTwo, and ExerciseView.
ExerciseView is mounted right away, then the user has to click the button 5 times. After the 5th button click, the code
should match the guess. A message will be displayed if it is right or wrong (HINT: take a look at how the msg is shown...)
Change the App view and go back to the exercise view if you want to reset the state.

RULES:
- You may NOT adjust the JSX that is returned from the render functions, including any conditionals in the JSX.
- You may NOT change the state in the constructors or change onClick handler for the button.
- State may be altered from the getDerivedStateFromProps.
- Do not change any of the given code, only add to it.
- You can only add ONE character to the guess in any lifecycle method (including constructor and render). Other code can be added
  to the method, but you can only have ONE expression adding to the guess. This can be in a conditional if you want.

  Example:

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.clicksLeft % 2) {
      guess += '7';
      return false;
    }
    return true;
  }

There may be multiple answers, but try to use all the methods we've learned. Do not use the UNSAFE methods.

*/

import React from 'react';

const code = '#$!2 489-&$27 531@&$27 48519@&$27 53@&&$27@'; // code that you are trying to match up
let guess = '';

/*********** 
  View One
************/
class ViewOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 175,
      heights: [140, 155, 160, 155, 160, 165],
    };
    this.viewRef = React.createRef();
  }

  render() {
    return (
      <div style={{ height: this.state.height }} ref={this.viewRef}>
        View One
      </div>
    );
  }
}

/*********** 
  View Two
************/
class ViewTwo extends React.Component {
  render() {
    return <div>View Two</div>;
  }
}

/****************
  Exercise View
*****************/
class ExerciseView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicksLeft: 5,
    };
    this.msgRef = React.createRef();

    guess = '';
    guess += '#';
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.clicksLeft <= 0) {
      console.log(guess);
      if (code === guess) {
        this.msgRef.current.textContent = 'Correct Code';
        this.msgRef.current.classList.add('has-background-success');
      } else {
        this.msgRef.current.textContent = 'Incorrect Code';
        this.msgRef.current.classList.add('has-background-danger');
      }
    }
  }

  // No changing this function!
  handleClick = () => {
    if (this.state.clicksLeft > 0) {
      this.setState((state) => ({ clicksLeft: state.clicksLeft - 1 }));
    }
  };

  render() {
    return (
      <div className="ExerciseView container">
        <button className="button" onClick={this.handleClick}>
          CLICK ME
        </button>
        <p>Clicks Left: {this.state.clicksLeft}</p>
        {this.state.clicksLeft <= 0 ? <p ref={this.msgRef} className="msg"></p> : null}
        <ViewOne clicksLeft={this.state.clicksLeft} />
        {this.state.clicksLeft % 2 ? <ViewTwo clicksLeft={this.state.clicksLeft} /> : null}
      </div>
    );
  }
}

export default ExerciseView;
