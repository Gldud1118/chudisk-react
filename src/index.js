import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';

import customHistory from './history';

import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css';
import './Fontawesome';

import App from './App';

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,

  document.getElementById('root')
);
