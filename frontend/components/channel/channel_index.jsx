import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      channels: this.props.channels
    };
  }

  componentDidMount() {
    this.setState({channels: this.props.fetchChannels()});
  }


  render() {
    return(
      <div className='channel-index'>
        <ul>
          {
            this.props.channels.map((channel) => {
              return (<ChannelIndexItem
                channel={channel}
              />);
            })
          }
        </ul>
      </div>
    );
  }
}

export default withRouter(ChannelIndex);
