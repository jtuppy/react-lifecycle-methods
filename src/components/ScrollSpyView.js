import React from 'react';

class ScrollSpyView extends React.Component {
  state = {
    msg: 'IN VIEW', // IN VIEW, PARTIALLY HIDDEN, HIDDEN
  };

  boxRef = React.createRef();

  handleScroll = () => {
    const { y, height } = this.boxRef.current.getBoundingClientRect();
    console.log(y, height);
    if (y > 0 && this.state.msg !== 'IN VIEW') {
      this.setState({ msg: 'IN VIEW' });
    } else if (y < 0 && y + height > 0 && this.state.msg !== 'PARTIALLY HIDDEN') {
      this.setState({ msg: 'PARTIALLY HIDDEN' });
    } else if (y < 0 && y + height <= 0 && this.state.msg !== 'HIDDEN') {
      this.setState({ msg: 'HIDDEN' });
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

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
