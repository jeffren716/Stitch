import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//Testing imports
import * as SessionAPIUtil from './util/session_api_util';
import { signup, login, logout } from './actions/session_actions';
import * as ChannelAPIUtil from './util/channel_api_util';
import { fetchChannels, fetchChannel } from './actions/channel_actions';
import { fetchUser } from './actions/user_actions';
//End of test imports

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser} };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //Testing window
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.fetchChannels = fetchChannels;
  window.fetchChannel = fetchChannel;
  window.fetchUser = fetchUser;
  //End of test window
  ReactDOM.render(<Root store={ store } />, root);
});
