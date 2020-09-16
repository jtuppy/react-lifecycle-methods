import React, { useState, useMemo, useRef, useLayoutEffect, useEffect } from 'react';

function BlueView({ numList }) {
  const [filter, setFilter] = useState(null);
  const listRef = useRef(null);

  const filteredList = useMemo(
    () =>
      numList.filter(
        (num) =>
          (filter === 'even' && num % 2 === 0) || (filter === 'odd' && num % 2) || filter === null
      ),
    [numList, filter]
  );

  const prevScrollHeight = useRef(null);
  const prevScrollTop = useRef(null);
  const componentJustMounted = useRef(true);
  useLayoutEffect(() => {
    if (!componentJustMounted.current) {
      listRef.current.scrollTop =
        listRef.current.scrollHeight - (prevScrollHeight.current - prevScrollTop.current);
    } else {
      // scroll to bottom when component is first mounted
      listRef.current.scrollTop = listRef.current.scrollHeight - listRef.current.offsetHeight;
      componentJustMounted.current = false;
    }
    // capture the old scroll height and scroll top to use next time the numList changes
    prevScrollHeight.current = listRef.current.scrollHeight;
    prevScrollTop.current = listRef.current.scrollTop;
  }, [filteredList]);

  // listen for changes to scroll top so we can use it next time numList changes
  useEffect(() => {
    const currListRef = listRef.current;
    const handleScroll = () => {
      prevScrollHeight.current = listRef.current.scrollHeight; // probably won't change, so likely not needed
      prevScrollTop.current = listRef.current.scrollTop;
    };
    currListRef.addEventListener('scroll', handleScroll);

    return () => {
      currListRef.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // another option
  // const componentJustMounted = useRef(true);
  // useLayoutEffect(() => {
  //   const currListRef = listRef.current;
  //   if (!componentJustMounted.current) {
  //     const lastChild = currListRef.lastChild;
  //     const lastChildHeight = lastChild.lastChild.offsetHeight;

  //     if (
  //       currListRef.scrollHeight - (currListRef.scrollTop + currListRef.offsetHeight) <
  //       lastChildHeight * 3
  //     ) {
  //       currListRef.scrollTop = currListRef.scrollHeight - currListRef.offsetHeight;
  //     }
  //   } else {
  //     // scroll to bottom when component is first mounted
  //     currListRef.scrollTop = currListRef.scrollHeight - currListRef.offsetHeight;
  //     componentJustMounted.current = false;
  //   }
  // }, [filteredList]);

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
      <div className="list-container" ref={listRef}>
        <ul>
          {filteredList.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlueView;
