import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import PlayAgain from '../components/PlayAgain';

class Feedback extends Component {
  render() {
    const { assertions, score, history } = this.props;
    const minAssertionsNumber = 3;
    return (
      <div className="feedback-page">
        <Header />
        <section className="feedback-message">
          {assertions >= minAssertionsNumber ? (
            <h2 data-testid="feedback-text">Well Done!</h2>
          ) : (
            <h2 data-testid="feedback-text">Could be better...</h2>
          )}
          <p>
            Você acertou
            <span data-testid="feedback-total-question">{assertions}</span>
            questões!
          </p>
          <p>
            Um total de
            <span data-testid="feedback-total-score">{score}</span>
            pontos.
          </p>
        </section>
        <section className="feedback-buttons">
          <PlayAgain history={ history } />
        </section>
      </div>
    );
  }
}

Feedback.propTypes = {
  assertions: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = ({ player }) => ({
  assertions: player.assertions,
  score: player.score,
});

export default connect(mapStateToProps)(Feedback);
