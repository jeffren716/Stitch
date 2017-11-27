import { connect } from 'react-redux';
import ChannelIndex from './channel_index';
import { fetchChannels, fetchChannel } from '../../actions/channel_actions';

const mapStateToProps = state => ({
  channels: Object.values(state.entities.channels)
});

const mapDispatchToProps = dispatch => ({
  fetchChannels: () => dispatch(fetchChannels()),
  fetchChannel: (channel) => dispatch(fetchChannel(channel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex);
