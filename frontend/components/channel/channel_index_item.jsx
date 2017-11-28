import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    document.title = 'Stitch - Games';
  }

  render() {
    return(
      <li className='channel-index-item'>
        <Link to={`/game/${this.props.channel.id}`}>
          <div className='channel-index-item-image'>
            <img src={this.props.channel.pic_url}></img>
          </div>
          <div className='channel-index-item-name'>
            <h1>{this.props.channel.name}</h1>
          </div>
        </Link>
      </li>
    );
  }
}

export default withRouter(ChannelIndexItem);
