import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  login: (user) => dispatch(login(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
