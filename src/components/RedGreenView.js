import React from 'react';
import { printRed } from '../utils';

class RedGreenView extends React.Component {
  constructor(props) {
    super(props);

    // printRed('RedGreenView: constructor');

    // State only needed for getDerivedStateFromProps
    // this.state = {
    //   prevColor: null,
    //   changed: true,
    // };

    this.viewRef = React.createRef();
  }

  // static getDerivedStateFromProps(props, state) {
  //   printRed('RedGreenView: getDerivedStateFromProps');

  //   /* Not a recommended approach, used only as an example */
  //   // return {
  //   //   changed: props.color !== state.prevColor,
  //   //   prevColor: props.color,
  //   //   // height: Math.floor(Math.random() * 200) + 300,
  //   // };
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

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   printRed('RedGreenView: componentDidUpdate');

  //   // Trivial example to demonstrate getSnapshotBeforeUpdate
  //   // const viewHeight = this.viewRef.current.offsetHeight;
  //   // console.log(snapshot, viewHeight);
  //   // if (snapshot < viewHeight) {
  //   //   this.viewRef.current.lastChild.innerText = 'Got Taller';
  //   // } else if (snapshot > viewHeight) {
  //   //   this.viewRef.current.lastChild.innerText = 'Got Smaller';
  //   // } else {
  //   //   this.viewRef.current.lastChild.innerText = 'Same';
  //   // }
  // }

  // componentWillUnmount() {
  //   printRed('RedGreenView: componentWillUnmount');
  // }

  render() {
    // printRed('RedGreenView: render');

    return (
      <div
        className={`RedGreenView bg-${this.props.color}`}
        ref={this.viewRef}
        // style={{ height: this.state.height }}
      >
        <p>{this.props.color}</p>
        {/* <p>{this.state.changed ? 'CHANGED' : 'NOT CHANGED'}</p> */}
        <p></p>
      </div>
    );
  }
}

export default RedGreenView;
