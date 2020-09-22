import React from 'react';
import axios from 'axios';

class ApiView extends React.Component {
  state = {
    loading: true,
    msg: '',
    category: 'animal',
  };

  componentDidMount() {
    this.cancelSource = axios.CancelToken.source();
    axios
      .get(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`, {
        cancelToken: this.cancelSource.token,
      })
      .then((res) => this.setState({ loading: false, msg: res.data.value }))
      .catch((err) => this.setState({ loading: false, msg: 'Failed to load joke :(' }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.category !== prevState.category) {
      this.setState({ loading: true });
      axios
        .get(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`, {
          cancelToken: this.cancelSource.token,
        })
        .then((res) => this.setState({ loading: false, msg: res.data.value }))
        .catch((err) => this.setState({ loading: false, msg: 'Failed to load joke :(' }));
    }
  }

  componentWillUnmount() {
    this.cancelSource.cancel();
  }

  onSelect = (evt) => {
    this.setState({ category: evt.target.value });
  };

  render() {
    return (
      <div className="ApiView">
        <div className="select">
          <select onChange={this.onSelect}>
            <option value="animal">animal</option>
            <option value="career">career</option>
            <option value="celebrity">celebrity</option>
            <option value="dev">dev</option>
            <option value="explicit">explicit</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="history">history</option>
            <option value="money">money</option>
            <option value="movie">movie</option>
            <option value="music">music</option>
            <option value="political">political</option>
            <option value="religion">religion</option>
            <option value="science">science</option>
            <option value="sport">sport</option>
            <option value="travel">travel</option>
          </select>
        </div>
        {this.state.loading ? <div className="loader is-loading" /> : <p>{this.state.msg}</p>}
      </div>
    );
  }
}

export default ApiView;
