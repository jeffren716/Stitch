import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class GameIndexItem extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillReceiveProps(newProps) {

  }

  render() {
    console.log(this.props.user);
    return(
      <li className='game-index-item'>
        <Link to={`/${this.props.user.username}`}>
          <div className='game-index-item-image'>
            <img src={this.props.user.profile_picture}></img>
          </div>
          <div className='game-index-item-username'>
            <h1>{this.props.user.username}</h1>
          </div>
        </Link>
      </li>
    );
  }
}

export default withRouter(GameIndexItem);
