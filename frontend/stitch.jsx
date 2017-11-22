import React from 'react';
import ReactDOM from 'react-dom';

//Testing imports
import * as SessionAPIUtil from './util/session_api_util';
//End of test imports

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  //Testing window
  window.signup = SessionAPIUtil.signup;
  window.login = SessionAPIUtil.login;
  window.logout = SessionAPIUtil.logout;
  //End of test window
  ReactDOM.render(<h1>Welcome to Stitch</h1>, root);
});
