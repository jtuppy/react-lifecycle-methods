import React from 'react';

function BlueView({ numList }) {
  return (
    <div className="BlueView">
      <div className="buttons is-centered">
        <button className="button">All</button>
        <button className="button">Even</button>
        <button className="button">Odd</button>
      </div>
      <div className="list-container">
        {/* <ul>
          {filteredList.map((num) => (
            <li key={num}>{num}</li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}

export default BlueView;
