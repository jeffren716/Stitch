import { combineReducers } from 'redux';
import channelsReducer from './channels_reducer';
import usersReducer from './users_reducer';
import followsReducer from './follows_reducer';

const entitiesReducer = combineReducers({
  channels: channelsReducer,
  users: usersReducer,
  follows: followsReducer
});

export default entitiesReducer;
