import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"

import rootReducer from './reducers/index';

let store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <script src="/path/to/flickity.pkgd.min.js"></script>

    <App />
  </Provider>,
  document.getElementById('root')
);
