import React from 'react';
import LifecycleView from './components/LifecycleView';
import ExerciseView from './components/ExerciseView';
import TimerView from './components/TimerView';
import ScrollSpyView from './components/ScrollSpyView';
import ApiView from './components/ApiView';

class App extends React.Component {
  state = {
    // view: null,
    // view: 'lifecycle',
    // view: 'exercise',
    // view: 'timer',
    // view: 'scroll',
    view: 'api',
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
          <button className={this.getButtonClass('timer')} onClick={this.handleViewChange('timer')}>
            Timer View
          </button>
          <button
            className={this.getButtonClass('scroll')}
            onClick={this.handleViewChange('scroll')}
          >
            Scroll View
          </button>
          <button className={this.getButtonClass('api')} onClick={this.handleViewChange('api')}>
            API View
          </button>
        </div>
        <div className="container">
          {this.state.view === 'lifecycle' ? (
            <LifecycleView />
          ) : this.state.view === 'exercise' ? (
            <ExerciseView />
          ) : this.state.view === 'timer' ? (
            <TimerView />
          ) : this.state.view === 'scroll' ? (
            <ScrollSpyView />
          ) : this.state.view === 'api' ? (
            <ApiView />
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
