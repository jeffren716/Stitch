import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.welcome = this.welcome.bind(this);
    this.sessionLinks = this.sessionLinks.bind(this);
  }
  sessionLinks() {
    return(
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
  }

  welcome(currentUser, logout) {
    return(
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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  demo(e) {
    e.preventDefault();
    let demo_user = ({username: 'demo_user', password: 'password'});
    this.props.login(demo_user);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'signup') {
      return (
        <p>Already have an account?
          <Link to='/login' className="login-form-link"> Log in </Link>
          instead</p>
      );
    } else {
      return (
        <p>Don't have an account?
          <Link to='/signup' className="login-form-link"> Sign up </Link>
          instead</p>
      );
    }
  }

  renderErrors() {
    if (this.props.errors) {
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error#${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    const Navbar = ({ currentUser, logout }) => (
      currentUser ? this.welcome(currentUser, logout) : this.sessionLinks()
    );
    return(
      <div className='master'>
        <div className='navbar'>
          {
            Navbar(this.props)
          }
        </div>
        <div className='modal'>
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className='login-form-box'>
              Welcome to Stitch!
              <br/>
              <h3>Please {formType}</h3>
              <h3 className="login-form-switch">{this.navLink()}</h3>
              <div className='login-form'>
                <br/>
                <div className="login-form-errors">
                  {this.renderErrors()}
                </div>
                <label>Username:
                  <input type='text'
                    value={this.state.username}
                    onChange={this.update('username')}
                    className='login-input'
                    autoFocus
                  />
                </label>
                <br/>
                <label>Password:
                  <input type='password'
                    value={this.state.password}
                    onChange={this.update('password')}
                    className='login-input'
                  />
                </label>
                <br/>
                <input id="login-form-button" type='submit' value="Submit" />
                <button id="login-form-button" onClick={this.demo}>
                  Demo log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Navbar);
