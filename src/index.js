import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom'; //+ Route, Link
// import {Preloader} from './components/'
import { Provider } from 'react-redux'
import store from './redux/store'
import './scss/style.scss';
import App from './App'


ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)

