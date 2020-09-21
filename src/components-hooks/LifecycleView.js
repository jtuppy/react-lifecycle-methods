import React, { useState, useEffect, useRef } from 'react';
import BlueView from './BlueView';
import RedGreenView from './RedGreenView';
import { printBlack } from '../utils';

function LifecycleView(props) {
  // made color an object to force an update on redGreenView even when color doesn't change
  // not recommended, but used as an example to show the changed/not changed part of the view
  const [redGreenView, setRedGreenView] = useState({ color: null });
  const [numList, setNumList] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const didMountRef = useRef(false);

  // just calculate any derived state on the fly if needed...
  printBlack('LifecycleView: get derived state from props');

  useEffect(() => {
    if (didMountRef.current) {
      printBlack('LifecycleView: did update');
    }
  });

  useEffect(() => {
    printBlack('LifecycleView: did mount');
    didMountRef.current = true;
    return () => {
      printBlack('LifecycleView: will unmount');
    };
  }, []);

  const handleAddItem = () => {
    console.log('ADD ITEM', new Date());
    setNumList([...numList, numList.length + 1]);
  };

  const handleChangeView = (redGreenView) => () => {
    console.log('CHANGE RED/GREEN VIEW', new Date());
    setRedGreenView({ color: redGreenView });
  };

  printBlack('LifecycleView: render');

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
          <BlueView numList={numList} />
        </div>
        <div className="column">
          {redGreenView.color === 'red' || redGreenView.color === 'green' ? (
            <RedGreenView colorProp={redGreenView} />
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

export default LifecycleView;
