import React, { useState, useEffect } from 'react';
import BlueView from './BlueView';
import RedGreenView from './RedGreenView';

function LifecycleView(props) {
  return (
    <div className="LifecycleView">
      <div className="columns">
        <div className="column">
          <div className="buttons is-centered">
            <button className="button">Add Item</button>
          </div>
        </div>
        <div className="column">
          <div className="buttons is-centered">
            <button className="button is-danger">Red</button>
            <button className="button is-success">Green</button>
            <button className="button">None</button>
          </div>
        </div>
      </div>

      <div className="columns">
        <div className="column">{/* <BlueView numList={numList} /> */}</div>
        <div className="column">
          {/* {redGreenView.color === 'red' || redGreenView.color === 'green' ? (
            <RedGreenView colorProp={redGreenView} />
          ) : (
            <div />
          )} */}
        </div>
      </div>
    </div>
  );
}

export default LifecycleView;
