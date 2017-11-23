import { connect } from 'react-redux';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.session.currentUser,
    errors: state.errors.session,
    formType: ownProps.processForm,
    isOpen: ownProps.isOpen
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let processForm = ownProps.processForm === 'signup' ? signup : login;
  dispatch(receiveErrors([]));
  return {
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(processForm(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
