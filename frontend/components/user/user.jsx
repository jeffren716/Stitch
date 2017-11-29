import React from 'react';
import{ Link, withRouter } from 'react-router-dom';

class User extends React.Component {

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id);
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
            height='400'
            width='712'
            frameBorder='0'
            scrolling='no'
            autoplay='0'
            allowFullScreen='true'>
          </iframe>
          <div className='user-info'>
            <img src={user.profile_picture}></img>
            <div className='user-info-header'>
              <h1>{user.username}</h1>
              <h2>{user.stream_title}</h2>
            </div>
          </div>
        </div>
      );

    }
  }
}

export default withRouter(User);
