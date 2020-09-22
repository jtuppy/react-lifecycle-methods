import React, { useState, useMemo, useLayoutEffect, useEffect } from 'react';
import { printBlue } from '../utils';

function EffectsBlueView({ numList }) {
  const [filter, setFilter] = useState(null);

  const filteredList = useMemo(
    () =>
      numList.filter(
        (num) =>
          (filter === 'even' && num % 2 === 0) || (filter === 'odd' && num % 2) || filter === null
      ),
    [numList, filter]
  );

  printBlue('BlueView: render');

  useEffect(() => {
    printBlue('BlueView: useEffect []');
    return () => printBlue('BlueView: useEffect [] cleanup');
  }, []);

  useLayoutEffect(() => {
    printBlue('BlueView: useLayoutEffect []');
    return () => printBlue('BlueView: useLayoutEffect [] cleanup');
  }, []);

  useEffect(() => {
    printBlue('BlueView: useEffect');
    return () => printBlue('BlueView: useEffect cleanup');
  });

  useLayoutEffect(() => {
    printBlue('BlueView: useLayoutEffect');
    return () => printBlue('BlueView: useLayoutEffect cleanup');
  });

  useEffect(() => {
    printBlue('BlueView: useEffect [filter]');
    return () => printBlue('BlueView: useEffect [filter] cleanup');
  }, [filter]);

  useLayoutEffect(() => {
    printBlue('BlueView: useLayoutEffect [filter]');
    return () => printBlue('BlueView: useLayoutEffect [filter] cleanup');
  }, [filter]);

  printBlue('BlueView: render again');

  return (
    <div className="BlueView">
      <div className="buttons is-centered">
        <button className="button" onClick={() => setFilter(null)}>
          All
        </button>
        <button className="button" onClick={() => setFilter('even')}>
          Even
        </button>
        <button className="button" onClick={() => setFilter('odd')}>
          Odd
        </button>
      </div>
      <div className="list-container">
        <ul>
          {filteredList.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EffectsBlueView;
