import { RECEIVE_CHANNEL } from '../actions/channel_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
  case RECEIVE_CHANNEL:
    return action.payload.users;
  case RECEIVE_USER:
    return merge({}, state, {[action.user.id]: action.user});
  default:
    return state;
  }
};

export default usersReducer;
