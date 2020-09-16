import React from 'react';
import LifecycleView from './components/LifecycleView';
import ExerciseView from './components/ExerciseView';

class App extends React.Component {
  state = {
    view: null,
    // view: 'lifecycle',
    // view: 'exercise',
  };

  handleViewChange = (view) => () => {
    this.setState({ view });
  };

  getButtonClass = (view) => {
    return `button ${this.state.view === view ? 'is-primary' : ''}`;
  };

  render() {
    return (
      <div className="App">
        <div className="container buttons py-5 is-centered">
          <button className={this.getButtonClass('none')} onClick={this.handleViewChange('none')}>
            None
          </button>
          <button
            className={this.getButtonClass('lifecycle')}
            onClick={this.handleViewChange('lifecycle')}
          >
            Lifecycle Examples
          </button>
          <button
            className={this.getButtonClass('exercise')}
            onClick={this.handleViewChange('exercise')}
          >
            Exercise
          </button>
        </div>
        <div className="container">
          {this.state.view === 'lifecycle' ? (
            <LifecycleView />
          ) : this.state.view === 'exercise' ? (
            <ExerciseView />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
