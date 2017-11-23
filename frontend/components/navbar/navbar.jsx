import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';

const sessionLinks = () => (
  <div className="navbar">
    <Link to="/">
      <img src="https://imgur.com/FNwqakc.png" />
    </Link>
    <div className="navbar-auth">
      <Link to="/login">
        <button className="navbar-button">Log in</button>
      </Link>
      <Link to="/signup">
        <button className="navbar-button">Sign up</button>
      </Link>
    </div>
  </div>
);

const welcome = (currentUser, logout) => (
  <div className="navbar">
    <Link to="/">
      <img src="https://imgur.com/FNwqakc.png" />
    </Link>
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
