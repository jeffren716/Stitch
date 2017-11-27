import * as ChannelUtil from '../util/channel_util';

export const RECEIVE_CHANNELS = 'RECEIVE_CHANNELS';
export const RECEIVE_CHANNEL = 'RECEIVE_CHANNEL';

const receiveChannels = () => ({
  type: RECEIVE_CHANNELS
});

const receiveChannel = (channel) => ({
  type: RECEIVE_CHANNEL,
  channel
});
