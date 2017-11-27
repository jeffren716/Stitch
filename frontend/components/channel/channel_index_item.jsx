import React from 'react';
import { withRouter } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <li className='channel-index-item'>
        <div className='channel-index-item-image'>
          <img src={this.props.channel.pic_url}></img>
        </div>
        <div className='channel-index-item-name'>
          <h1>{this.props.channel.name}</h1>
        </div>
      </li>
    );
  }
}

export default withRouter(ChannelIndexItem);
