import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
// import ChannelIndexContainer from './channel/channel_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="page">
    <header>
      <NavbarContainer />
    </header>

    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
