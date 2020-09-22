import React from 'react';

class ScrollSpyView extends React.Component {
  state = {
    msg: 'IN VIEW', // IN VIEW, PARTIALLY HIDDEN, HIDDEN
  };

  boxRef = React.createRef();

  render() {
    return (
      <div className="ScrollSpyView">
        <div className="box" ref={this.boxRef}></div>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default ScrollSpyView;
