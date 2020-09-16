import React from 'react';
import { printRed } from '../utils';

class RedGreenView extends React.Component {
  constructor(props) {
    super(props);
    printRed('RedGreenView: constructor');

    // State only needed for getDerivedStateFromProps
    // this.state = {
    //   prevColor: null,
    //   changed: true,
    // };

    this.viewRef = React.createRef();
  }

  // static getDerivedStateFromProps(props, state) {
  //   printRed('RedGreenView: getDerivedStateFromProps');
  // }

  // componentDidMount() {
  //   printRed('RedGreenView: componentDidMount');
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   printRed('RedGreenView: getSnapshotBeforeUpdate');
  //   return this.viewRef.current.offsetHeight;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   printRed('RedGreenView: shouldComponentUpdate');
  //   return true;
  // }

  componentDidUpdate(prevProps, prevState, snapshot) {
    printRed('RedGreenView: componentDidUpdate');
  }

  componentWillUnmount() {
    printRed('RedGreenView: componentWillUnmount');
  }

  render() {
    printRed('RedGreenView: render');

    return (
      <div className={`RedGreenView bg-${this.props.color}`} ref={this.viewRef}>
        <p>{this.props.color}</p>
        {/* <p>{this.state.changed ? 'CHANGED' : 'NOT CHANGED'}</p> */}
        <p></p>
      </div>
    );
  }
}

export default RedGreenView;
