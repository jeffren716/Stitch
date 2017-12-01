import React from 'react';
import{ Link, withRouter } from 'react-router-dom';

class User extends React.Component {

  constructor(props) {
    super(props);

    this.handleFollowToggle = this.handleFollowToggle.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchUser(newProps.match.params.id);
    }
  }

  handleFollowToggle() {
    let { followsId, user, makeFollow, deleteFollow, currentUser } = this.props;
    if (followsId.includes(user.id)) {
      return(
        <button onClick={deleteFollow(user.id)}>Unfollow</button>
      );
    } else {
      return(
        <button onClick={makeFollow({user_id: user.id, follower_id: currentUser.id})}>Follow</button>
      );
    }
  }

  handleFollow() {
    if (this.props.loggedIn) {
      return(
        <div className='user-info-follow-button'>{this.handleFollowToggle}</div>
      );
    } else {
      return(
        <div className='user-info-follow-warning'>Follow</div>
      );
    }
  }

  render() {
    let user = this.props.user;
    if (!user) {
      return(<div>Ya bois wicked smaht</div>);
    } else {
      return(
        <div className='user-stream'>
          <iframe
            src={user.stream_url}
            height='490'
            width='872'
            frameBorder='0'
            scrolling='no'
            autoPlay='1'
            allowFullScreen='true'>
          </iframe>
          <div className='user-info'>
            <img src={user.profile_picture}></img>
            <div className='user-info-header'>
              <h1 className='user-info-username'>{user.username}</h1>
              <h2>{user.stream_title}</h2>
            </div>
            {
              this.handleFollow
            }
          </div>
        </div>
      );

    }
  }
}

export default withRouter(User);
