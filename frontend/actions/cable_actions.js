import { receiveMessage } from './message_actions.js';

export const setSocket = (irc_id) => dispatch => {
  if (window.App.channel) {
    removeSocket();
  }
  addSocket(irc_id, dispatch);
};

export const removeSocket = () => {
  window.App.cable.subscriptions.remove(window.App.channel);
};

export const addSocket = (irc_id, dispatch) => {
  window.App.channel = window.App.cable.subscriptions.create({
    channel: 'IRCChannel',
    id: irc_id
  }, {
    connected: () => {},
    disconnected: () => {},
    received: (data) => {
      if (data.message) {
        dispatch(receiveMessage(data.message));
      }
    }
  });
};
