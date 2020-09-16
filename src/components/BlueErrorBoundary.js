import React, { Component } from 'react';

class BlueErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    console.log(`BlueErrorBoundary: getDerivedStateFromError: ${error}`);
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log(`BlueErrorBoundary: componentDidCatch: ${error}`);
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="error">Oh No! List is broken!</h1>;
    }

    return this.props.children;
  }
}

export default BlueErrorBoundary;
