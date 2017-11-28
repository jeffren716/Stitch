import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import SidebarContainer from './sidebar/sidebar_container';
import LandingContainer from './landing/landing_container';
import ChannelIndexContainer from './channel/channel_index_container';
import GameIndexContainer from './game/game_index_container';
import UserContainer from './user/user_container';
// import ChannelIndexContainer from './channel/channel_container';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="page">
    <header>
      <NavbarContainer />
      <div className='placeholder-sidebar'>
        <h1>Please log in to see followed users!</h1>
      </div>
    </header>
    <div>
      <ProtectedRoute component={ SidebarContainer } />
    </div>
    <Switch>
      <Route exact path='/directory' component={ ChannelIndexContainer } />
      <Route exact path='/' component={ LandingContainer }/>
      <Route path='/game/:id' component={ GameIndexContainer }/>
      <Route path='/:id' component={ UserContainer }/>
    </Switch>
  </div>
);

export default App;
