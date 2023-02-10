import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../helpers/localStorage';
// import { requestAPI } from '../redux/actions';
// import { requestTokenAPI } from '../helpers/requestApi';
// import { requestAPI } from '../redux/actions';
import Header from '../components/Header';

import Questions from '../components/Questions';
import { requestAPI } from '../redux/actions';

class Game extends Component {
  state = {
    questionIndex: 0,
    results: [],
    answersShuffled: [],
  };

  async componentDidMount() {
    const { history, dispatch } = this.props;
    const token = getToken();
    console.log(token);
    await dispatch(requestAPI(token));
    const { results, response } = this.props;
    const three = 3;
    if (response === three) {
      localStorage.removeItem('token');
      history.push('/');
      return;
    }
    this.setState({ results }, this.shuffleAnswers);
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
