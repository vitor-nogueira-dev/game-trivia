import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../helpers/localStorage';
// import { requestAPI } from '../redux/actions';
// import { requestTokenAPI } from '../helpers/requestApi';
// import { requestAPI } from '../redux/actions';
import Header from '../components/Header';

import Questions from '../components/Questions';
import { saveQuestions } from '../redux/actions';

const TIMER_TIME = 30;

class Game extends Component {
  state = {
    questionIndex: 0,
    results: [],
    answersShuffled: [],
    timerCounter: TIMER_TIME,
    clicked: false,
    isDisabled: false,
  };

  async componentDidMount() {
    const { dispatch, history } = this.props;
    const token = getToken();

    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&token=${token}`,
      );
      const { response_code: responseCode, results } = await response.json();
      const three = 3;
      if (responseCode === three) {
        localStorage.removeItem('token');
        history.push('/');
        return;
      }
      this.setState({ results }, () => {
        this.shuffleAnswers();
        this.startTimer();
      });
      dispatch(saveQuestions(results));
    } catch (error) {
      console.warn(error);
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
      this.setState(({ timerCounter, clicked }) => {
        if (timerCounter === 0 || clicked) {
          this.stopTimer();
          return { isDisabled: true };
        }
        return { timerCounter: timerCounter - 1 };
      });

      console.log('o timer está rodando');
    }, aSecondInMiliseconds);
  };

  handleOptionClick = () => {
    this.setState({ clicked: true });
  };

  shuffleAnswers = () => {
    const { results, questionIndex } = this.state;

    const answers = [
      ...results[questionIndex].incorrect_answers,
      results[questionIndex].correct_answer,
    ];

    const number = 0.5;
    const answersShuffled = answers.sort(() => Math.random() - number);
    this.setState({ answersShuffled });
  };

  render() {
    const {
      questionIndex, answersShuffled, results,
      timerCounter, clicked, isDisabled,
    } = this.state;
    return (
      <div className="game">
        <Header />
        <Questions
          results={ results }
          answersShuffled={ answersShuffled }
          questionIndex={ questionIndex }
          clicked={ clicked }
          handleOptionClick={ this.handleOptionClick }
          isDisabled={ isDisabled }
        />
        <p>{ `Timer: ${timerCounter}s` }</p>
      </div>
    );
  }
}

Game.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = ({ api }) => ({
  response: api.response,
  results: api.results,
});

export default connect(mapStateToProps)(Game);
