import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../helpers/localStorage';
import { requestAPI } from '../redux/actions';
// import { requestTokenAPI } from '../helpers/requestApi';
// import { requestAPI } from '../redux/actions';
import Header from '../components/Header';

class Game extends Component {
  state = {
    questionIndex: 0,
  };

  componentDidMount() {
    const { dispatch } = this.props;

    const token = getToken();
    dispatch(requestAPI(token));
    // temos o obj com o token
    // disparar a action thunk com o token
    // a action thunk vai mandar para o estado global os dados da resposta e se a resposta do token for inválido ou seja, 3 o didupdate entra no if, remove do localStorage o token e redireciona o usuário para a tela de login
  }

  componentDidUpdate() {
    const { response, history } = this.props;

    const invalidResponse = 3;
    if (response === invalidResponse) {
      localStorage.removeItem('token');
      history.push('/');
    }
  }

  shuffleArray = (array) => {
    const number = 0.5;
    return array.sort(() => Math.random() - number);
  };

  render() {
    const { questionIndex } = this.state;
    const { results } = this.props;
    console.log(results);

    if (results.length === 0) return <p>Loading...</p>;

    const {
      category,
      question,
      correct_answer: correctAnswer,
      incorrect_answers: incorrectAnswers,
    } = results[questionIndex];

    const shuffled = this.shuffleArray([correctAnswer, ...incorrectAnswers]);

    return (
      <div className="game">
        <Header />
        <h1 data-testid="question-category">{ category }</h1>
        <h3 data-testid="question-text">{ question }</h3>
        <div data-testid="answer-options">
          { shuffled.map((answer, index) => (
            <button
              key={ answer }
              type="button"
              data-testid={
                answer === correctAnswer
                  ? 'correct-answer'
                  : `wrong-answer-${index}`
              }
            >
              { answer }
            </button>
          )) }
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  results: PropTypes.shape({
    length: PropTypes.number,
  }),
}.isRequired;

const mapStateToProps = ({ api }) => ({
  response: api.response,
  results: api.results,
});

export default connect(mapStateToProps)(Game);
