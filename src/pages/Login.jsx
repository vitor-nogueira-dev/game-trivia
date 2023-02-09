import PropTypes from 'prop-types'
import React, { Component } from 'react';
import validator from 'validator';

export default class Login extends Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.handleValidated);
  };

  handleValidated = () => {
    const { email, name } = this.state;
    const isEmailValid = validator.isEmail(email);
    this.setState({ isDisabled: !(isEmailValid && name) });
  };

  redirect = () => {
    const { history } = this.props
    history.push('/settings')
  }

  render() {
    const { name, email, isDisabled } = this.state;
    return (
      <div>
        <label htmlFor="email">
          <input
            type="text"
            name="name"
            id="email"
            data-testid="input-player-name"
            onChange={ this.handleChange }
            value={ name }
          />
        </label>
        <label htmlFor="name">
          <input
            type="email"
            name="email"
            id="name"
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          data-testid="btn-play"
        >
          Play
        </button>
        <button 
        type="button"
        data-testid="btn-settings"
        onClick={ this.redirect }
        >
          Settings
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}
