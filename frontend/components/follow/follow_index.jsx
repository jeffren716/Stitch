import React from 'react';
import { withRouter } from 'react-router-dom';
import FollowIndexItem from './follow_index_item';

class FollowIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFollows();
  }

  render() {
    let { deleteFollow } = this.props;
    if (this.props.follows !== []) {
      return(
        <div className='follow-index'>
          <ul>
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
    } else if (this.props.follows === []) {
      return(
        <div>
          <p>It's a little lonely. Find some users to follow!</p>
        </div>
      );
    }
  }
}

export default withRouter(FollowIndex);
