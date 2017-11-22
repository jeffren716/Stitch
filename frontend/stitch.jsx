import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//Testing imports
import * as SessionAPIUtil from './util/session_api_util';
//End of test imports

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  //Testing window
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = SessionAPIUtil.signup;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  //End of test window
  ReactDOM.render(<Root store={ store } />, root);
});
