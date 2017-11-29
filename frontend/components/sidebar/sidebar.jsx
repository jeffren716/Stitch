import React from 'react';
import { withRouter } from 'react-router-dom';

class Sidebar extends React.Component {


  render() {
    return(
      <div className='sidebar'>
        <div className='sidebar-title'>
          <h1>Followed Users</h1>
        </div>
        <div className='sidebar-divider'></div>
      </div>
    );
  }
}

export default withRouter(Sidebar);
