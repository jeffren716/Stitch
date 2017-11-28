import { combineReducers } from 'redux';
import channelsReducer from './channels_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  channels: channelsReducer,
  users: usersReducer
});

export default entitiesReducer;
