import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Landing = () => (
  <div className='landing'>
    <div className='splash'>
    </div>
    <div className='landing-container'>
      <img src="https://imgur.com/FNwqakc.png" />
      <br/>
      <h1>The best gameplay from your favorite streamers</h1>
      <p>
        Watch, follow, and stream all the content from all the things you know and love.
        From nostalgic, childhood games to the freshest content hot off the press, everything
        is at your fingertips.  Follow your favorite streamers and chat along with other viewers.
        Start watching now!
      </p>
      <Link to='/directory'>
        <button className='landing-button'>Explore</button>
      </Link>
    </div>
  </div>
);

export default withRouter(Landing);
