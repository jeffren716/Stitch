import { connect } from 'react-redux';
import User from './user';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => {
  return({
    user: state.entities.users[ownProps.match.params.id]
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchUser: (userId) => dispatch(fetchUser(userId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
