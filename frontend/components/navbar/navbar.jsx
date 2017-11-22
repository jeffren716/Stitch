import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="navbar">
    <div className="navbar-logo">
      <Link to="/">Stitch</Link>
    </div>
    <div className="navbar-auth">
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  </div>
);

const welcome = (currentUser, logout) => (
  <div className="navbar">
    <div className="navbar-logo">
      <Link to="/">Stitch</Link>
    </div>
    <div className="navbar-auth">
      <h2 className="navbar-greeting">Welcome, {currentUser.username}</h2>
      <button className="navbar-button" onClick={logout}>Log out</button>
    </div>
  </div>
);

const navbar = ({ currentUser, logout }) => (
  currentUser ? welcome(currentUser, logout) : sessionLinks()
);

export default navbar;
