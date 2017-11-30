import { connect } from 'react-redux';
import FollowIndex from './follow_index';
import { fetchFollows, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = state => {
  console.log(state);
  return({
    follows: Object.values(state.entities.follows)
  });
};

const mapDispatchToProps = dispatch => {

  return({
    fetchFollows: () => dispatch(fetchFollows()),
    deleteFollow: (followId) => dispatch(deleteFollow(followId))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FollowIndex);
