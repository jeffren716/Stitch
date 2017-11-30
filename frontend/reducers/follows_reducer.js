import {
  RECEIVE_FOLLOWS,
  CREATE_FOLLOW,
  REMOVE_FOLLOW
} from '../actions/follow_actions';
import merge from 'lodash/merge';

const followsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
  case RECEIVE_FOLLOWS:
    return action.follows;
  case CREATE_FOLLOW:
    return merge({}, state, {[action.follow.id]: action.follow})
  case REMOVE_FOLLOW:
    let newState = state;
    delete newState[action.followId];
    return newState;
  default:
    return state;
  }
}

export default followsReducer;
