import { connect } from 'react-redux';
import { login, signup, logout, receiveErrors } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  loggedIn: (state.session.currentUser === null ? false : true),
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => {
  dispatch(receiveErrors(null));
  return {
    signup: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    logout: () => dispatch(logout())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
