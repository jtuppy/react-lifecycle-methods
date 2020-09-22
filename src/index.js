import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './AppHooks';

// let App = null;
// if (process.env.REACT_APP_HOOKS) {
//   App = require('./AppHooks').default;
// } else {
//   App = require('./App').default;
// }

ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
