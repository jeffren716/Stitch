import React from 'react';
import { withRouter } from 'react-router-dom';
import FollowIndexItem from './follow_index_item';

class FollowIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleEmpty = this.handleEmpty.bind(this);
  }

  componentDidMount() {
    this.props.fetchFollows();
  }

  handleEmpty() {
    if (this.props.follows.length < 1) {
      return(
        <div className='follow-index-empty'>
          It's a little lonely. Find some users to follow!
        </div>
      );
    }
  }

  render() {
    let { deleteFollow } = this.props;
    if (this.props.follows) {
      return(
        <div className='follow-index'>
          <ul>
            {this.handleEmpty()}
            {
              this.props.follows.map((follow) => {
                return (
                  <FollowIndexItem
                    key={follow.id}
                    follow={follow}
                    deleteFollow = {deleteFollow}
                  />
                );
              })
            }
          </ul>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(FollowIndex);
