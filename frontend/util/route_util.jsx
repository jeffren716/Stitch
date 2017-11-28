import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Protected = ({component: Component, path, loggedIn}) => (
  <Route path={path} render={(props) => (
    loggedIn ? (
      <Component {...props} />
    ) : (
      <div className='placeholder-sidebar'>
        <h1>Please log in to see followed users!</h1>
      </div>
    )
  )}/>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
