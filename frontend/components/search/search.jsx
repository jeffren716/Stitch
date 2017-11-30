import React from 'react';
import ReactDOM from 'react-dom';
import * as SearchAPIUtil from '../../util/search_api_util';
import { Link, withRouter } from 'react-router-dom';

// Modeled after axomusic search
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      results: {
        channels: null,
        users: null
      }
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectChannel = this.handleSelectChannel.bind(this);
    this.handleSelectUser = this.handleSelectUser.bind(this);
    this.onBlur = this.onBlur.bind(this);
    // this.handleCloseSearch = this.handleCloseSearch.bind(this);
  }

  // handleCloseSearch(event) {
  //   event.preventDefault();
  //   this.setState({query: ''});
  // }

  // https://stackoverflow.com/questions/36180414/reactjs-add-custom-event-listener-to-component
  // componentDidMount() {
  //   if (document.getElementById('searchbox-screen')) {
  //     document.getElementById('searchbox-screen').addEventListener('click', this.handleCloseSearch);
  //   }
  // }

  componentWillUnmount() {
    // document.getElementById('searchbox-screen').removeEventListener('click', this.handleCloseSearch);
  }

  handleSearch(e) {
    e.preventDefault();
    let query = e.target.value;
    this.setState({query: query}, () => {

      if (this.state.query) {
        SearchAPIUtil.searchDatabase(this.state.query).then(response => {
          let channels = null;
          let users = null;
          if (response.channelSearchResults) {
            channels = Object.values(response.channelSearchResults.channel);
          }
          if (response.userSearchResults) {
            users = Object.values(response.userSearchResults);
          }

          this.setState({
            results: {
              channels,
              users
            }
          });
        });
      }
    });
  }

  handleSelectChannel(channel) {
    return(e) => {
      e.preventDefault();
      this.setState({query: ''}, () => {
        this.props.history.push(`/game/${channel.id}`);
      });
    };
  }

  handleSelectUser(user) {
    return(e) => {
      e.preventDefault();
      this.setState({query: ''}, () => {
        this.props.history.push(`/${user.id}`);
      });
    };
  }

  // https://stackoverflow.com/questions/31247214/onfocus-and-onblur-does-not-render-in-react
  onBlur() {
    this.setState({query: ''});
  }

  renderResults(channelResults, userResults) {
    if (this.state.query !== '') {
      return(
        <div className='searchbox-results'>
          <ul>
            <li className='searchbox-tab'><h1>Channels</h1></li>
            {channelResults}
            <li className='searchbox-tab'><h1>Users</h1></li>
            {userResults}
          </ul>
        </div>
      );
    }
  }

  render() {
    let { channels, users } = this.state.results;
    let channelResults;
    let userResults;
    if (channels !== null) {
      channelResults = channels.map(channel => (
        <li onClick={this.handleSelectChannel(channel)} key={`${channel.name}-${channel.id}`}>
          <div className='searchbox-results-channel'>
            <img src={channel.pic_url}></img>
            <h2>{channel.name}</h2>
          </div>
        </li>
      ));
    } else {
      channelResults = (<li>No results</li>);
    }
    if (users !== null) {
      userResults = users.map(user => (
        <li onClick={this.handleSelectUser(user)} key={`${user.name}-${user.id}`}>
          <div className='searchbox-results-user'>
            <img src={user.profile_picture}></img>
            <h2>{user.username}</h2>
          </div>
        </li>
      ));
    } else {
      userResults = (<li>No results</li>);
    }
    return(
      <div className='searchbox-container'>
        <div className='searchbox-input'>
          <input
            type='text'
            onChange={this.handleSearch}
            onBlur={this.onBlur}
            value={this.state.query}
            placeholder='Search'
          />
        </div>
        {this.renderResults(channelResults, userResults)}
      </div>
    );
  }
}

export default withRouter(Search);
