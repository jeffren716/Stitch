import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannel = (payload) => ({
  type: RECEIVE_CHANNEL,
  payload
});

export const fetchChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels().then(response => (
    dispatch(receiveChannels(response))
  ))
);

export const fetchChannel = (channelId) => dispatch => (
  ChannelAPIUtil.fetchChannel(channelId).then(response => (
    dispatch(receiveChannel(response))
  ))
);
