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
    return(
      <div className='follow-index'>
        <ul>
          {
            this.props.follows.map((follow) => {
              return (
                <FollowIndexItem
                  key={follow.id}
                  follow={follow}
                />
              );
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(FollowIndex);
