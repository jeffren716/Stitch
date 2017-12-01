import { connect } from 'react-redux';
import User from './user';
import { fetchUser } from '../../actions/user_actions';
import { makeFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[ownProps.match.params.id],
    followsId: Object.keys(state.entities.follows),
    currentUser: state.session.currentUser,
    loggedIn: (state.session.currentUser === null ? false : true),
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    makeFollow: (follow) => dispatch(makeFollow(follow)),
    deleteFollow: (followId) => dispatch(deleteFollow(followId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
