import React from 'react';
import { withRouter } from 'react-router-dom';

const Landing = () => (
  <div className='landing'>
    <div className='splash'>
    </div>
    <div className='landing-container'>
      <img src="https://imgur.com/FNwqakc.png" />
      <br/>
      <p>
        Placeholder content about website that goes underneath the logo
      </p>
    </div>
  </div>
);

export default withRouter(Landing);
