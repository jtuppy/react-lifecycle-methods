import React, { useState } from 'react';
import LifecycleView from './components-hooks/LifecycleView';
import EffectsView from './components-hooks/EffectsView';
import ExerciseView from './components-hooks/ExerciseView';
import TimerView from './components-hooks/TimerView';
import ScrollSpyView from './components-hooks/ScrollSpyView';
import ApiView from './components-hooks/ApiView';

function App(props) {
  const [view, setView] = useState(null);

  const getButtonClass = (whichView) => {
    return `button ${view === whichView ? 'is-primary' : ''}`;
  };

  console.log('Render App');

  return (
    <div className="App">
      <div className="container buttons py-5 is-centered">
        <button className={getButtonClass('none')} onClick={() => setView('none')}>
          None
        </button>
        <button className={getButtonClass('lifecycle')} onClick={() => setView('lifecycle')}>
          Lifecycle Examples
        </button>
        <button className={getButtonClass('effects')} onClick={() => setView('effects')}>
          Effects Examples
        </button>
        <button className={getButtonClass('exercise')} onClick={() => setView('exercise')}>
          Exercise
        </button>
        <button className={getButtonClass('timer')} onClick={() => setView('timer')}>
          Timer View
        </button>
        <button className={getButtonClass('scroll')} onClick={() => setView('scroll')}>
          Scroll View
        </button>
        <button className={getButtonClass('api')} onClick={() => setView('api')}>
          API View
        </button>
      </div>
      <div className="container">
        {view === 'lifecycle' ? (
          <LifecycleView />
        ) : view === 'effects' ? (
          <EffectsView />
        ) : view === 'exercise' ? (
          <ExerciseView />
        ) : view === 'timer' ? (
          <TimerView />
        ) : view === 'scroll' ? (
          <ScrollSpyView />
        ) : view === 'api' ? (
          <ApiView />
        ) : null}
      </div>
    </div>
  );
}

export default App;
