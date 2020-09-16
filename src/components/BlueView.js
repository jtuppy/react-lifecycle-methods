import React from 'react';
import { printBlue, memo } from '../utils';

class BlueView extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filter: null, // null, even, or odd
    };

    // memoize example
    // this.filter = memo((list, filter) =>
    //   list.filter(
    //     (num) =>
    //       (filter === 'even' && num % 2 === 0) || (filter === 'odd' && num % 2) || filter === null
    //   )
    // );

    this.listRef = React.createRef();

    printBlue('BlueView: constructor');
  }

  // static getDerivedStateFromProps(props, state) {
  //   printBlue('BlueView: getDerivedStateFromProps');
  //   // if (props.numList !== state.prevPropsNumList || state.prevFilter !== state.filter) {
  //   //   return {
  //   //     prevPropsNumList: props.numList,
  //   //     prevFilter: state.filter,
  //   //     filteredList: props.numList.filter(
  //   //       (num) =>
  //   //         (state.filter === 'even' && num % 2 === 0) ||
  //   //         (state.filter === 'odd' && num % 2) ||
  //   //         state.filter === null
  //   //     ),
  //   //   };
  //   // }

  //   return null;
  // }

  componentDidMount() {
    printBlue('BlueView: componentDidMount');
    this.listRef.current.scrollTop =
      this.listRef.current.scrollHeight - this.listRef.current.offsetHeight;
  }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   printBlue('BlueView: getSnapshotBeforeUpdate');
  //   // if (this.props.numList.length > prevProps.numList.length) {
  //   //   return this.listRef.current.scrollHeight - this.listRef.current.scrollTop;
  //   // }
  //   return null;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   printBlue('BlueView: shouldComponentUpdate');
  //   // if (nextProps.numList[nextProps.numList.length - 1] % 2) {
  //   //   return true;
  //   // }
  //   // return false;
  //   return true;
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   printBlue('BlueView: componentDidUpdate');
  //   // if (snapshot !== null) {
  //   //   this.listRef.current.scrollTop = this.listRef.current.scrollHeight - snapshot;
  //   // }
  // }

  // componentWillUnmount() {
  //   printBlue('BlueView: componentWillUnmount');
  // }

  handleErrorClick() {
    // throw new Error('List is broken...  :(')
  }

  render() {
    printBlue('BlueView: render');

    const filteredList = this.props.numList.filter(
      (num) =>
        (this.state.filter === 'even' && num % 2 === 0) ||
        (this.state.filter === 'odd' && num % 2) ||
        this.state.filter === null
    );

    // derivedState example
    // const filteredList = this.state.filteredList;

    // memoize example
    // const filteredList = this.filter(this.props.numList, this.state.filter);

    return (
      <div className="BlueView">
        <div className="buttons is-centered">
          <button className="button" onClick={() => this.setState({ filter: null })}>
            All
          </button>
          <button className="button" onClick={() => this.setState({ filter: 'even' })}>
            Even
          </button>
          <button className="button" onClick={() => this.setState({ filter: 'odd' })}>
            Odd
          </button>
          <button className="button is-danger" onClick={this.handleErrorClick}>
            Throw Error
          </button>
        </div>
        <div className="list-container" ref={this.listRef}>
          <ul>
            {filteredList.map((num) => (
              <li key={num}>{num}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BlueView;
