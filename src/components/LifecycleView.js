import React from 'react';
import BlueView from './BlueView';
import RedGreenView from './RedGreenView';
// import BlueErrorBoundary from './BlueErrorBoundary';
import { printBlack } from '../utils';

class LifecycleView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redGreenView: null, // red, green or null
      numList: [1, 2, 3, 4, 5, 6, 7, 8],
    };
    printBlack('LifecycleView: constructor');
  }

  // static getDerivedStateFromProps(props, state) {
  //   printBlack('LifecycleView: getDerivedStateFromProps');
  //   return null;
  // }

  // UNSAFE_componentWillMount() {
  //   printBlack('LifecycleView: UNSAFE_componentWillMount');
  // }

  // componentDidMount() {
  //   printBlack('LifecycleView: componentDidMount');
  // }

  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   printBlack('LifecycleView: UNSAFE_componentWillReceiveProps');
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   printBlack('LifecycleView: getSnapshotBeforeUpdate');
  //   return null;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   printBlack('LifecycleView: shouldComponentUpdate');
  //   return true;
  // }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   printBlack('LifecycleView: UNSAFE_componentWillUpdate');
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   printBlack('LifecycleView: componentDidUpdate');
  // }

  // componentWillUnmount() {
  //   printBlack('LifecycleView: componentWillUnmount');
  // }

  handleAddItem = () => {
    console.log('ADD ITEM', new Date());
    this.setState((state) => ({
      numList: [...state.numList, state.numList.length + 1],
    }));
  };

  handleChangeView = (redGreenView) => () => {
    console.log('CHANGE RED/GREEN VIEW', new Date());
    this.setState({ redGreenView });
  };

  render() {
    printBlack('LifecycleView: render');
    const { redGreenView } = this.state;

    return (
      <div className="LifecycleView">
        <div className="columns">
          <div className="column">
            <div className="buttons is-centered">
              <button className="button" onClick={this.handleAddItem}>
                Add Item
              </button>
            </div>
          </div>
          <div className="column">
            <div className="buttons is-centered">
              <button className="button is-danger" onClick={this.handleChangeView('red')}>
                Red
              </button>
              <button className="button is-success" onClick={this.handleChangeView('green')}>
                Green
              </button>
              <button className="button" onClick={this.handleChangeView(null)}>
                None
              </button>
            </div>
          </div>
        </div>

        <div className="columns">
          <div className="column">
            <BlueView numList={this.state.numList} />
          </div>
          <div className="column">
            {redGreenView === 'red' || redGreenView === 'green' ? (
              <RedGreenView color={redGreenView} />
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default LifecycleView;
