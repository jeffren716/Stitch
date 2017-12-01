import React from 'react';
import { withRouter } from 'react-router-dom';
import FollowIndexContainer from '../follow/follow_index_container';
import Footer from '../footer/footer';

class Sidebar extends React.Component {


  render() {
    return(
      <div className='sidebar'>
        <div className='sidebar-title'>
          <h1>Followed Users</h1>
        </div>
        <div className='sidebar-divider'></div>
        <FollowIndexContainer />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Sidebar);
