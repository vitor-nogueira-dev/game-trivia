import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../helpers/localStorage';
// import { requestAPI } from '../redux/actions';
// import { requestTokenAPI } from '../helpers/requestApi';
// import { requestAPI } from '../redux/actions';
import Header from '../components/Header';
import Timer from '../components/Timer';

import Questions from '../components/Questions';
import { saveQuestions } from '../redux/actions';

class Game extends Component {
  state = {
    questionIndex: 0,
    results: [],
    answersShuffled: [],
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
      this.setState({ results }, this.shuffleAnswers);
      dispatch(saveQuestions(results));
    } catch (error) {
      console.warn(error);
    }
  }

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
    const { questionIndex, answersShuffled, results } = this.state;
    return (
      <div className="game">
        <Header />
        <Questions
          results={ results }
          answersShuffled={ answersShuffled }
          questionIndex={ questionIndex }
        />
        <Timer monitoredState="" />
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
