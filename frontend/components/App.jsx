import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import SidebarContainer from './sidebar/sidebar_container';
import LandingContainer from './landing/landing_container';
import ChannelIndexContainer from './channel/channel_index_container';
// import ChannelIndexContainer from './channel/channel_container';
import { ProtectedRoute } from '../util/route_util';

const App = () => (
  <div className="page">
    <header>
      <NavbarContainer />
    </header>
    <ProtectedRoute component={ SidebarContainer } />
    <Switch>
      <Route path='/directory' component={ ChannelIndexContainer } />
      <Route path='/' component={ LandingContainer }/>
    </Switch>
  </div>
);

export default App;
