import React, { useRef, useEffect, useLayoutEffect } from 'react';

const useHeightSnapshot = (viewRef) => {
  const prevHeight = useRef(null);
  const componentJustMounted = useRef(true);

  useLayoutEffect(() => {
    if (!componentJustMounted.current) {
      const viewHeight = viewRef.current.offsetHeight;
      const snapshot = prevHeight.current;
      if (snapshot < viewHeight) {
        viewRef.current.lastChild.innerText = 'Got Taller';
      } else if (snapshot > viewHeight) {
        viewRef.current.lastChild.innerText = 'Got Smaller';
      } else {
        viewRef.current.lastChild.innerText = 'Same';
      }
    }
    componentJustMounted.current = false;
    prevHeight.current = viewRef.current.offsetHeight;
  });
};

function RedGreenView({ colorProp: { color } }) {
  const lastColorRef = useRef(null);
  const viewRef = useRef(null);

  const height = Math.floor(Math.random() * 200) + 300;

  let changed = true;
  if (lastColorRef.current === color) {
    changed = false;
  }

  useEffect(() => {
    lastColorRef.current = color;
  }, [color]);

  useHeightSnapshot(viewRef);

  return (
    <div className={`RedGreenView bg-${color}`} ref={viewRef} style={{ height }}>
      <p>{color}</p>
      <p>{changed ? 'CHANGED' : 'NOT CHANGED'}</p>
      <p></p>
    </div>
  );
}

export default RedGreenView;
