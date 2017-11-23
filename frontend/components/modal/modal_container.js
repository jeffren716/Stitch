import { connect } from 'react-redux';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.session.currentUser,
    loggedIn: (state.session.currentUser ? true : false),
    errors: state.errors.session,
    formType: (ownProps.processForm === 'signup' ? 'sign up' : 'log in'),
    isOpen: ownProps.isOpen
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = ownProps.processForm === 'signup' ? signup : login;
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(processForm(user)),
    receiveErrors: (arr) => dispatch(receiveErrors(arr))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
