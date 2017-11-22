import React from 'react';
import { Route } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div className="page">
    <header>
      <NavbarContainer />
    </header>

    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
