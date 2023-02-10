import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Questions.css';

class Questions extends Component {
  state = {
    clicou: false,
  };

  handleOptionClick = () => {
    this.setState({
      clicou: true,
    });
  };

  handleClassName = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) return 'correct';
    return 'wrong';
  };

  render() {
    const { questionIndex, answersShuffled, results } = this.props;
    const { clicou } = this.state;
    if (results.length === 0 || answersShuffled.length === 0) return <p>Loading...</p>;

    return (
      <div>
        <div>
          <h1 data-testid="question-category">{results[questionIndex].category}</h1>
          <h3 data-testid="question-text">{results[questionIndex].question}</h3>
          <div data-testid="answer-options">
            {answersShuffled.map((answer, index) => (
              <button
                key={ answer }
                type="button"
                data-testid={
                  answer === results[questionIndex].correct_answer
                    ? 'correct-answer'
                    : `wrong-answer-${index}`
                }
                className={ clicou
                  ? this.handleClassName(answer, results[questionIndex].correct_answer)
                  : '' }
                onClick={ () => this
                  .handleOptionClick(answer, results[questionIndex].correct_answer) }
              >
                {answer}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Questions.propTypes = {
  answersShuffled: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }),
  questionIndex: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape({})),
}.isRequired;

export default connect()(Questions);
