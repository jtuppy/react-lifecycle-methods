import React, { useRef, useEffect, useLayoutEffect } from 'react';

const getHeightMessage = (prevHeight, currentHeight) => {
  if (prevHeight < currentHeight) {
    return 'Got Taller';
  } else if (prevHeight > currentHeight) {
    return 'Got Smaller';
  }
  return 'Same';
};

const useHeightSnapshot = (viewRef) => {
  const prevHeight = useRef(null);
  const componentJustMounted = useRef(true);

  useLayoutEffect(() => {
    if (!componentJustMounted.current) {
      const viewHeight = viewRef.current.offsetHeight;
      const snapshot = prevHeight.current;
      viewRef.current.lastChild.innerText = getHeightMessage(snapshot, viewHeight);
    }
    componentJustMounted.current = false;
    prevHeight.current = viewRef.current.offsetHeight;
  });
};

function RedGreenView({ color }) {
  const lastColorRef = useRef(null);
  // const viewRef = useRef(null);

  const height = Math.floor(Math.random() * 200) + 300;

  let changed = true;
  if (lastColorRef.current === color) {
    changed = false;
  }

  useEffect(() => {
    lastColorRef.current = color;
  }, [color]);

  // useHeightSnapshot(viewRef);

  // using ref callback API instead
  const prevHeight = useRef(null);
  const viewRef = (node) => {
    if (node !== null) {
      const viewHeight = node.offsetHeight;
      if (prevHeight.current !== null) {
        const snapshot = prevHeight.current;
        node.lastChild.innerText = getHeightMessage(snapshot, viewHeight);
      }
      prevHeight.current = viewHeight;
    }
  };

  // using derived state
  // let msg = '';
  // const prevHeightRef = useRef(null);
  // if (prevHeightRef.current !== null) {
  //   msg = getHeightMessage(prevHeightRef.current, height);
  // }
  // prevHeightRef.current = height;

  return (
    <div className={`RedGreenView bg-${color}`} ref={viewRef} style={{ height }}>
      <p>{color}</p>
      <p>{changed ? 'CHANGED' : 'NOT CHANGED'}</p>
      <p></p>
    </div>
  );
}

export default RedGreenView;
