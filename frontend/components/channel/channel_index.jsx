import React from 'react';
import { withRouter } from 'react-router-dom';
import ChannelIndexItem from './channel_index_item';

class ChannelIndex extends React.Component {


  render() {
    return(
      <div className='channel-index'>
        <ul>
          <ChannelIndexItem
            
          />
        </ul>
      </div>
    );
  }
}

export default withRouter(ChannelIndex);
