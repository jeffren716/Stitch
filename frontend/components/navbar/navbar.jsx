import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <div className="navbar">
    <button className="navbar-logo">
      <Link to="/"></Link>
      Stitch
    </button>
    <div className="navbar-auth">
      <button className="navbar-button">
        <Link to="/login"></Link>
        Log in
      </button>
      <button className="navbar-button">
        <Link to="/signup"></Link>
        Sign up
      </button>
    </div>
  </div>
);

const welcome = (currentUser, logout) => (
  <div className="navbar">
    <button className="navbar-logo">
      <Link to="/"></Link>
      Stitch
    </button>
    <div className="navbar-auth">
      <h2 className="navbar-greeting">Welcome, {currentUser.username}</h2>
      <button className="navbar-button" onClick={logout}>Log out</button>
    </div>
  </div>
);

const Navbar = ({ currentUser, logout }) => (
  currentUser ? welcome(currentUser, logout) : sessionLinks()
);

export default Navbar;
