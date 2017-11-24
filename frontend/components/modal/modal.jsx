import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isOpen: this.props.isOpen
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.escModal = this.escModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({isOpen: nextProps.isOpen});
    if (!this.state.isOpen) {
      document.addEventListener('keydown', this.escModal);
    }
    if (nextProps.loggedIn) {
      this.props.history.push('/directory');
    }
  }

  escModal(e) {
    if (e.keyCode === 27) {
      e.preventDefault();
      this.closeModal();
      document.removeEventListener('keydown', this.escModal);
    }
  }

  closeModal() {
    this.props.handleCloseModal();
    this.setState({username: '', password: ''});
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
    this.closeModal();
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.closeModal());
  }

  navLink() {
    if (this.props.formType === 'sign up') {
      return (
        <p>Already have an account?
          <a href={this.toggleLogin}className="login-form-link"> Log in </a>
          instead</p>
      );
    } else {
      return (
        <p>Don't have an account?
          <a href={this.toggleSignup} className="login-form-link"> Sign up </a>
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
    let { formType } = this.props;
    return (
      <div className={this.state.isOpen ? 'modal-open' : 'modal-close'}>
        <a onClick={this.closeModal}>
          <div className='modal-screen'></div>
        </a>
        <div className="login-form-container">
          <form onSubmit={this.handleSubmit} className='login-form-box'>
            Welcome to Stitch!
            <br/>
            <h3>Please {formType}</h3>
            <div className='login-form'>
              <br/>
              <div className="login-form-errors">
                {this.renderErrors()}
              </div>
              <input type='text'
                value={this.state.username}
                onChange={this.update('username')}
                className='login-input'
                autoFocus
                placeholder='Username'
              />
              <br/>
              <input type='password'
                value={this.state.password}
                onChange={this.update('password')}
                className='login-input'
                placeholder='Password'
              />
              <br/>
              <input id="login-form-button" type='submit' value="Submit" />
              <button id="login-form-button" onClick={this.demo}>
                Demo log in
              </button>
            </div>
          </form>
        </div>
      </div>

    );
  }
}

export default withRouter(Modal);
