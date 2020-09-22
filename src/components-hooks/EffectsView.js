import React, { useState, useEffect, useLayoutEffect } from 'react';
import EffectsBlueView from './EffectsBlueView';
import EffectsRGView from './EffectsRGView';
import { printBlack } from '../utils';

function EffectsView(props) {
  const [redGreenView, setRedGreenView] = useState({ color: null });
  // const [redGreenView, setRedGreenView] = useState(null);

  const [numList, setNumList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const handleAddItem = () => {
    console.log('ADD ITEM', new Date());
    setNumList([...numList, numList.length + 1]);
  };

  const handleChangeView = (redGreenView) => () => {
    console.log('CHANGE RED/GREEN VIEW', new Date());
    setRedGreenView({ color: redGreenView });
    // setRedGreenView(redGreenView);
  };

  printBlack('EffectsView: render');

  useEffect(() => {
    printBlack('EffectsView: useEffect []');
    return () => printBlack('EffectsView: useEffect [] cleanup');
  }, []);

  useLayoutEffect(() => {
    printBlack('EffectsView: useLayoutEffect []');
    return () => printBlack('EffectsView: useLayoutEffect [] cleanup');
  }, []);

  useEffect(() => {
    printBlack('EffectsView: useEffect');
    return () => printBlack('EffectsView: useEffect cleanup');
  });

  useLayoutEffect(() => {
    printBlack('EffectsView: useLayoutEffect');
    return () => printBlack('EffectsView: useLayoutEffect cleanup');
  });

  useEffect(() => {
    printBlack('EffectsView: useEffect [redGreenView]');
    return () => printBlack('EffectsView: useEffect [redGreenView] cleanup');
  }, [redGreenView]);

  useLayoutEffect(() => {
    printBlack('EffectsView: useLayoutEffect [redGreenView]');
    return () => printBlack('EffectsView: useLayoutEffect [redGreenView] cleanup');
  }, [redGreenView]);

  printBlack('EffectsView: render again');

  return (
    <div className="LifecycleView">
      <div className="columns">
        <div className="column">
          <div className="buttons is-centered">
            <button className="button" onClick={handleAddItem}>
              Add Item
            </button>
          </div>
        </div>
        <div className="column">
          <div className="buttons is-centered">
            <button className="button is-danger" onClick={handleChangeView('red')}>
              Red
            </button>
            <button className="button is-success" onClick={handleChangeView('green')}>
              Green
            </button>
            <button className="button" onClick={handleChangeView(null)}>
              None
            </button>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">
          <EffectsBlueView numList={numList} />
        </div>
        <div className="column">
          {redGreenView.color === 'red' || redGreenView.color === 'green' ? (
            <EffectsRGView color={redGreenView.color} />
          ) : (
            <div />
          )}

          {/* {redGreenView === 'red' || redGreenView === 'green' ? (
            <EffectsRGView color={redGreenView} />
          ) : (
            <div />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default EffectsView;
