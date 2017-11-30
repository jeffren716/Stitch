import React from 'react';
import { withRouter } from 'react-router-dom';
import GameIndexItem from './game_index_item';

class GameIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: this.props.users,
      channel: this.props.channel
    };

  }

  componentDidMount() {
    this.props.fetchChannel(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.props.fetchChannel(newProps.match.params.id);
    }
  }

  render() {
    return(
      <div className='game-index'>
        <ul>
          {
            this.props.users.map((user) => {
              return (<GameIndexItem
                key={user.id}
                user={user}
                channelId={user.channelId}
              />);
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(GameIndex);
