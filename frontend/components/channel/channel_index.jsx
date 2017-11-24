import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelIndex extends React.Component {


  render() {
    return(
      <iframe
        src='http://player.twitch.tv/?channel=food'
        height='720'
        width='1280'
        frameBorder='0'
        scrolling='no'
        allowFullScreen='true'>

      </iframe>
    );
  }
}

export default withRouter(ChannelIndex);
