import React, { useState, useRef, useEffect } from 'react';

function ScrollSpyView(props) {
  const [msg, setMsg] = useState('IN VIEW');
  const boxRef = useRef(null);

  return (
    <div className="ScrollSpyView">
      <div className="box" ref={boxRef}></div>
      <p>{msg}</p>
    </div>
  );
}

export default ScrollSpyView;
