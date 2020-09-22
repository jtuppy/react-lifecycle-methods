import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const JOKE_REQUEST = 'JOKE_REQUEST';
const JOKE_RESPONSE = 'JOKE_RESPONSE';
const CHANGE_CATEGORY = 'CHANGE_CATEGORY';

function reducer(state, action) {
  switch (action.type) {
    case JOKE_REQUEST:
      return { ...state, loading: true, msg: '' };
    case JOKE_RESPONSE:
      return { ...state, loading: false, msg: action.msg };
    case CHANGE_CATEGORY:
      return { ...state, category: action.category };
    default:
      throw new Error();
  }
}

const initialState = {
  loading: true,
  msg: '',
  category: 'animal',
};

function ApiView(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { category, loading, msg } = state;

  return (
    <div className="ApiView">
      <div className="select">
        <select onChange={(evt) => dispatch({ type: CHANGE_CATEGORY, category: evt.target.value })}>
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
      {loading ? <div className="loader is-loading" /> : <p>{msg}</p>}
    </div>
  );
}

export default ApiView;
