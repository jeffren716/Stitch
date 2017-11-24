import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
      <Link to='/directory'>
        <button className='landing-button'>Explore!</button>
      </Link>
    </div>
  </div>
);

export default withRouter(Landing);
