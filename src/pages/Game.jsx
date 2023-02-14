import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../helpers/localStorage';
import Header from '../components/Header';

import Questions from '../components/Questions';
import { saveQuestions, updateScore, updateAssertions } from '../redux/actions';

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
    const { dispatch, history, categoryId, difficulty, type } = this.props;
    const token = getToken();
    try {
      const response = await fetch(
        `https://opentdb.com/api.php?amount=5&token=${token}&category=${categoryId}&difficulty=${difficulty}&type=${type}`,
      );
      const {
        response_code: responseCode,
        results,
      } = await response.json();
      const three = 3;
      if (responseCode === three) {
        localStorage.removeItem('token');
        history.push('/');
      } else {
        this.setState({ results }, () => {
          this.shuffleAnswers();
          this.startTimer();
          dispatch(saveQuestions(results));
        });
      }
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
          return { isDisabled: true, clicked: true };
        }
        return { timerCounter: timerCounter - 1 };
      });
    }, aSecondInMiliseconds);
  };

  handleOptionClick = (selectedAnswer, correctAnswer, difficulty) => {
    const { timerCounter } = this.state;
    const { dispatch } = this.props;
    const ten = 10;
    let score = ten;
    const pontos = { hard: 3, medium: 2, easy: 1 };
    if (selectedAnswer === correctAnswer) {
      score += (timerCounter * pontos[difficulty]);
      dispatch(updateScore(score));
      dispatch(updateAssertions());
    }

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

  handleClickNext = () => {
    const { questionIndex } = this.state;
    const { history } = this.props;
    const four = 4;
    if (questionIndex === four) return history.push('/feedback');
    this.setState({
      questionIndex: questionIndex + 1,
      clicked: false,
      timerCounter: TIMER_TIME,
      isDisabled: false,
    }, () => {
      this.shuffleAnswers();
      this.startTimer();
    });
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
          results={results}
          answersShuffled={answersShuffled}
          questionIndex={questionIndex}
          clicked={clicked}
          handleOptionClick={this.handleOptionClick}
          isDisabled={isDisabled}
          handleClickNext={this.handleClickNext}
        />
        <p>{`Timer: ${timerCounter}s`}</p>
      </div>
    );
  }
}

Game.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
}.isRequired;

const mapStateToProps = ({ api }) => ({
  ...api,
  // response: api.response,
  // results: api.results,
});

export default connect(mapStateToProps)(Game);
