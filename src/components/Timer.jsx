import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TIMER_TIME = 30;

export default class Timer extends Component {
  state = {
    counter: TIMER_TIME,
  };

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate() {
    const { counter } = this.state;

    // Esse é o estado que será monitorado e quando atualizado, o timer irá iniciar, parar ou reiniciar
    const { monitoredState: userAnwser } = this.props;

    // quando o counter for igual a zero, para de contar / atualizar o estado
    // ou quando o usuário selecionar uma alternativa
    const timeFinishedOrUserAnswered = (counter === 0 || userAnwser !== '');
    if (timeFinishedOrUserAnswered) {
      this.stopTimer();
    }
  }

  componentWillUnmount() {
    // garante que o intervalo será finalizado ao desmontar o componente
    this.stopTimer();
  }

  stopTimer = () => {
    clearInterval(this.intervalID);
    this.intervalID = null;
  };

  startTimer = () => {
    const aSecondInMiliseconds = 1000;

    // inicia o timer e salva o ID que será utilizado para conseguir parar
    // A cada segundo, atualiza o estado do counter diminuindo 1
    this.intervalID = setInterval(() => {
      this.setState(({ counter }) => ({ counter: counter - 1 }));

      // console log para conseguir ver no console se há um timer rodando sem necessidade
      console.log('o timer está rodando');
    }, aSecondInMiliseconds);
  };

  render() {
    const { counter } = this.state;
    return (
      <p>{ `Timer: ${counter}s` }</p>
    );
  }
}

Timer.propTypes = {
  monitoredState: PropTypes.string.isRequired,
};
