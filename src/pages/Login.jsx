import PropTypes from 'prop-types';
import React, { Component } from 'react';
import validator from 'validator';
import getToken from '../redux/actions';

export default class Login extends Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.handleValidated);
  };

  handleClick = async () => {
    await getToken();
    const { history } = this.props;
    history.push('/game');
  };

  handleValidated = () => {
    const { email, name } = this.state;
    const isEmailValid = validator.isEmail(email);
    this.setState({ isDisabled: !(isEmailValid && name) });
  };

  redirect = () => {
    const { history } = this.props;
    history.push('/settings');
  };

  render() {
    const { name, email, isDisabled } = this.state;
    return (
      <div>
        <label htmlFor="name">
          Nome
          <input
            type="text"
            name="name"
            id="name"
            data-testid="input-player-name"
            onChange={ this.handleChange }
            value={ name }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
            value={ email }
          />
        </label>
        <button
          type="button"
          disabled={ isDisabled }
          onClick={ this.handleClick }
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
    push: PropTypes.func.isRequired,
  }).isRequired,
};
