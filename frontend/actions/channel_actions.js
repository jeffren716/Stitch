import * as ChannelAPIUtil from '../util/channel_api_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

const receiveChannels = (channels) => ({
  type: RECEIVE_CHANNELS,
  channels
});

const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});

export const fetchChannels = () => dispatch => (
  ChannelAPIUtil.fetchChannels().then(response => (
    dispatch(receiveChannels(response))
  ))
);

export const fetchChannel = (channel) => dispatch => (
  ChannelAPIUtil.fetchChannel(channel).then(response => (
    dispatch(receiveChannel(response))
  ))
);
