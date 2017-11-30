import * as MessageAPIUtils from '../utils/message_api_util';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';

export const receiveMessage = (message) => {
  return {
    type: RECEIVE_MESSAGE,
    message
  };
};

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages,
});

export const createChannelMessage = (message, ircId) => (dispatch) => (
  MessageAPIUtils.createChannelMessage(message, ircId)
);

export const fetchChannelMessages = (ircId) => dispatch => (
  MessageAPIUtils.fetchChannelMessages(ircId).then(
    (messages) => dispatch(receiveMessages(messages))
  )
);
