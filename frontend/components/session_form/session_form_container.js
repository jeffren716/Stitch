import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: (state.session.currentUser === null ? false : true),
  errors: state.errors.session,
  formType: (ownProps.location.pathname === '/signup' ? 'signup' : 'login')
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = (ownProps.location.pathname === '/signup' ? signup : login);
  return {
    processForm: (user) => dispatch(processForm(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
