import React from 'react';
import{ Link, withRouter } from 'react-router-dom';

class User extends React.Component {



  render() {
    return(
      <div className='user-stream'>
        <iframe
          src='http://player.twitch.tv/?video=187283482&time=03m46s'
          height='400'
          width='712'
          frameBorder='0'
          scrolling='no'
          allowFullScreen='true'
          time='03m46s'>
        </iframe>
      </div>
    );
  }
}

export default withRouter(User);
