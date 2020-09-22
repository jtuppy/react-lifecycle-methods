import React, { useState, useRef, useEffect } from 'react';

function ScrollSpyView(props) {
  const [msg, setMsg] = useState('IN VIEW');
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { y, height } = boxRef.current.getBoundingClientRect();
      if (y > 0 && msg !== 'IN VIEW') {
        setMsg('IN VIEW');
      } else if (y < 0 && y + height > 0 && msg !== 'PARTIALLY HIDDEN') {
        setMsg('PARTIALLY HIDDEN');
      } else if (y < 0 && y + height <= 0 && msg !== 'HIDDEN') {
        setMsg('HIDDEN');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [msg]);

  return (
    <div className="ScrollSpyView">
      <div className="box" ref={boxRef}></div>
      <p>{msg}</p>
    </div>
  );
}

export default ScrollSpyView;
