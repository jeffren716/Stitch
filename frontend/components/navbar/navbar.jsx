import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ModalContainer from '../modal/modal_container';
import Search from '../search/search';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isOpen: false,
      processForm: ''
    };
    this.welcome = this.welcome.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.loggedIn && this.props.loggedIn) {
      this.props.history.push('/');
    }
  }

  toggleLogin(e) {
    e.preventDefault;
    this.setState({processForm: 'login', isOpen: true});
  }

  toggleSignup(e) {
    e.preventDefault;
    this.setState({processForm: 'signup', isOpen: true});
  }

  sessionLinks() {
    return(
      <div className="navbar">
        <div className='navbar-left'>
          <Link to="/">
            <img src="https://imgur.com/FNwqakc.png" />
          </Link>
          <div className='navbar-left-browse'>
            <Link to='/directory'>Browse</Link>
          </div>
          <Search></Search>
        </div>
        <div className="navbar-auth">
          <button onClick={this.toggleLogin} className="navbar-button">Log in</button>
          <button onClick={this.toggleSignup} className="navbar-button">Sign up</button>
        </div>
      </div>
    );
  }



  welcome(currentUser, logout) {
    return(
      <div className="navbar">
        <div className='navbar-left'>
          <Link to="/">
            <img src="https://imgur.com/FNwqakc.png" />
          </Link>
          <div className='navbar-left-browse'>
            <Link to='/directory'>Browse</Link>
          </div>
          <Search></Search>
        </div>
        <div className="navbar-auth">
          <img src={currentUser.profile_picture}></img>
          <h2 className="navbar-greeting">Welcome, {currentUser.username}</h2>
          <button className="navbar-button" onClick={logout}>Log out</button>
        </div>
      </div>
    );
  }

  handleCloseModal() {
    this.setState({isOpen: false});
    this.props.receiveErrors([]);
  }

  render() {
    const Navbar = ({ currentUser, logout }) => (
      currentUser ? this.welcome(currentUser, logout) : this.sessionLinks()
    );
    return(
      <div className='master'>
        {
          Navbar(this.props)
        }
        <ModalContainer
          processForm={this.state.processForm}
          isOpen={this.state.isOpen}
          handleCloseModal={this.handleCloseModal.bind(this)}
        />
      </div>
    );
  }
}

export default withRouter(Navbar);
