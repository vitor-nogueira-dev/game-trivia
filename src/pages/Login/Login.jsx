import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';
import { saveEmail, saveName, getToken } from '../../redux/actions';

import { Button, Container, ContainerButton, Input } from './style';
import logoTrivia from '../../assets/logoTrivia.png';

class Login extends Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, this.handleValidated);
  };

  // Faz o fetch do token, salva o nome e o email no estado global e redireciona para o game
  handleClick = async () => {
    await getToken();
    const { history, dispatch } = this.props;
    const { name, email } = this.state;
    dispatch(saveEmail(email));
    dispatch(saveName(name));
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
      <Container>
        <img src={ logoTrivia } alt="" />
        <label htmlFor="name">
          <Input
            type="text"
            name="name"
            id="name"
            data-testid="input-player-name"
            onChange={ this.handleChange }
            value={ name }
            placeholder="Nome"
          />
        </label>
        <label htmlFor="email">
          <Input
            type="email"
            name="email"
            id="email"
            data-testid="input-gravatar-email"
            onChange={ this.handleChange }
            value={ email }
            placeholder="E-mail"
          />
        </label>
        <ContainerButton>
          <Button
            type="button"
            disabled={ isDisabled }
            onClick={ this.handleClick }
            data-testid="btn-play"
          >
            Play
          </Button>
          <Button
            className='btn-settings'
            type="button"
            data-testid="btn-settings"
            onClick={ this.redirect }
          >
            Settings
          </Button>
        </ContainerButton>
      </Container>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
