import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Questions.css';
import { ContainerButtons, BotaoNext, Container } from '../style';

class Questions extends Component {
  handleClassName = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) return 'correct';
    return 'wrong';
  };

  render() {
    const {
      questionIndex, answersShuffled, results,
      clicked, handleOptionClick, isDisabled,
      handleClickNext,
    } = this.props;

    if (results.length === 0 || answersShuffled.length === 0) return <p>Loading...</p>;

    const buttonNext = (
      <button
        type="button"
        onClick={handleClickNext}
        data-testid="btn-next"
        className='btn-next'
      >
        Next
      </button>
    );
    return (
      <div>
        <Container>
          <h1 data-testid="question-category">{results[questionIndex].category}</h1>
          <h3 data-testid="question-text">{results[questionIndex].question}</h3>
          <ContainerButtons data-testid="answer-options">
            {answersShuffled.map((answer, index) => (
              <button
                key={answer}
                type="button"
                disabled={isDisabled}
                data-testid={
                  answer === results[questionIndex].correct_answer
                    ? 'correct-answer'
                    : `wrong-answer-${index}`
                }
                className={clicked
                  ? this.handleClassName(answer, results[questionIndex].correct_answer)
                  : ''}
                onClick={() => handleOptionClick(
                  answer,
                  results[questionIndex].correct_answer,
                  results[questionIndex].difficulty,
                )}
              >
                {answer}
              </button>
            ))}
          </ContainerButtons>
          <BotaoNext>{clicked && buttonNext}</BotaoNext>
        </Container>
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
