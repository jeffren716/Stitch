import { connect } from 'react-redux';
import { login, signup, receiveErrors } from '../../actions/session_actions';
import Modal from './modal';

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  console.log(ownProps);
};

const mapDispatchToProps = (dispatch, ownProps) => {
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
