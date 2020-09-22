import React, { useEffect, useLayoutEffect } from 'react';
import { printRed } from '../utils';

function EffectsRGView({ color }) {
  printRed('RGView: render');

  useEffect(() => {
    printRed('RGView: useEffect []');
    return () => printRed('RGView: useEffect [] cleanup');
  }, []);

  useLayoutEffect(() => {
    printRed('RGView: useLayoutEffect []');
    return () => printRed('RGView: useLayoutEffect [] cleanup');
  }, []);

  useEffect(() => {
    printRed('RGView: useEffect');
    return () => printRed('RGView: useEffect cleanup');
  });

  useLayoutEffect(() => {
    printRed('RGView: useLayoutEffect');
    return () => printRed('RGView: useLayoutEffect cleanup');
  });

  useEffect(() => {
    printRed('RGView: useEffect [color]');
    return () => printRed('RGView: useEffect [color] cleanup');
  }, [color]);

  useLayoutEffect(() => {
    printRed('RGView: useLayoutEffect [color]');
    return () => printRed('RGView: useLayoutEffect [color] cleanup');
  }, [color]);

  printRed('RGView: render again');

  return (
    <div className={`RedGreenView bg-${color}`}>
      <p>{color}</p>
    </div>
  );
}

export default EffectsRGView;
