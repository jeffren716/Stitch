import { connect } from 'react-redux';
import GameIndex from './game_index';
import { fetchUsers, fetchUser } from '../../actions/user_actions';
import { fetchChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return({
    users: Object.values(state.entities.users),
    channel: state.entities.channels[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GameIndex));
