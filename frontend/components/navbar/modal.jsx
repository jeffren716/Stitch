import React from 'react';
import SessionFormContainer from '../session_form/session_form_container';
import { withRouter } from 'react-router-dom';

class Modal extends React.Component {

  render () {
    return (
      <div className='modal'>
        <SessionFormContainer />
      </div>
    );
  }
}

export default withRouter(Modal);
