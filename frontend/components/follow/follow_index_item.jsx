import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FollowIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.history.push(`/${this.props.follow.id}`);
  }

  render() {
    let { follow } = this.props;
    return(
      <li className='follow-index-item' onClick={this.handleClick}>
        <div className='follow-info'>
          <img src={follow.profile_picture}></img>
          <div className='follow-info-header'>
            <h1 className='follow-info-username'>{follow.username}</h1>
            <h2>{follow.stream_title}</h2>
          </div>
        </div>
      </li>
    );
  }
}

export default withRouter(FollowIndexItem);
