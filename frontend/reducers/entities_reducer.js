import { combineReducers } from 'redux';
import channelsReducer from './channels_reducer';

const entitiesReducer = combineReducers({
  channels: channelsReducer
});

export default entitiesReducer;
