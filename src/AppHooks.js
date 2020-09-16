import React, { useState } from 'react';
import LifecycleView from './components-hooks/LifecycleView';
import ExerciseView from './components-hooks/ExerciseView';

function App(props) {
  const [view, setView] = useState(null);

  const getButtonClass = (whichView) => {
    return `button ${view === whichView ? 'is-primary' : ''}`;
  };

  return (
    <div className="App">
      <div className="container buttons py-5 is-centered">
        <button className={getButtonClass('none')} onClick={() => setView('none')}>
          None
        </button>
        <button className={getButtonClass('lifecycle')} onClick={() => setView('lifecycle')}>
          Lifecycle Examples
        </button>
        <button className={getButtonClass('exercise')} onClick={() => setView('exercise')}>
          Exercise
        </button>
      </div>
      <div className="container">
        {view === 'lifecycle' ? <LifecycleView /> : view === 'exercise' ? <ExerciseView /> : null}
      </div>
    </div>
  );
}

export default App;
