import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    let user = Object.assign({}, this.state);
    this.props.processForm(user);
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
    return(
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className='login-form-box'>
          Welcome to Stitch!
          <br/>
          Please {formType}
          {this.renderErrors()}
          <div className='login-form'>
            <br/>
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
            <input type='submit' value="Submit" />
          </div>
        </form>
      </div>
    );
  }

}

export default withRouter(SessionForm);
