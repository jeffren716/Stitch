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
        <div className="footer">
          <a href="http://github.com/jeffren716" target="_blank">
            <img className='github-image' src='https://image.flaticon.com/icons/png/512/25/25231.png'></img>
          </a>

          <a href='https://www.linkedin.com/in/jeffrey-ren-a71b48108/' target="_blank">
            <img className='linkedin-image' src='http://www.freepngimg.com/download/linkedin/9-2-linkedin-free-download-png.png'></img>
          </a>
        </div>
      </div>
    )
  )}/>
);

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser)
});

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
