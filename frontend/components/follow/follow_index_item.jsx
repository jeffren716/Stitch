import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class FollowIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleClick() {
    this.props.history.push(`/${this.props.follow.id}`);
  }

  handleDelete() {
    this.props.deleteFollow(this.props.follow.id);
  }

  render() {
    console.log(this.props);
    let { follow, deleteFollow } = this.props;
    return(
      <div className='follow-index-item-div'>
        <li className='follow-index-item' onClick={this.handleClick}>
          <div className='follow-info'>
            <img src={follow.profile_picture}></img>
            <div className='follow-info-header'>
              <h1 className='follow-info-username'>{follow.username}</h1>
              <h2>{follow.stream_title}</h2>
            </div>
          </div>
        </li>
        <button
          className='follow-remove'
          onClick={this.handleDelete}
        >
          X
        </button>
      </div>
    );
  }
}

export default withRouter(FollowIndexItem);
