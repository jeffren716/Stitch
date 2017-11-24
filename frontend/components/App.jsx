import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import LandingContainer from './landing/landing_container';
// import ChannelIndexContainer from './channel/channel_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="page">
    <header>
      <NavbarContainer />
    </header>

    <Route exact path='/' component={ LandingContainer }/>
  </div>
);

export default App;
