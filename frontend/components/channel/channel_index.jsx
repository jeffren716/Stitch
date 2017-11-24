import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {


  render() {
    return(
      <iframe
        src='http://player.twitch.tv/?video=187283482'
        height='720'
        width='1280'
        frameBorder='0'
        scrolling='no'
        allowFullScreen='true'
        time='03m46s'>

      </iframe>
    );
  }
}

export default withRouter(ChannelIndex);
