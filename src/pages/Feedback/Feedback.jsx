import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "../../components/Header";
import { restartScore } from '../../redux/actions';
import { addRanking } from "../../services/rankingsService";
import logoTrivia from "../../assets/logoTrivia.png";
import {
	StyledHeaderGroup,
	StyledFeedbackMessage,
	StyledSection,
	StyledFeedbackButtons,
	ContainerBlur,
} from "./style.js";

class Feedback extends Component {
	handleRankingClick = () => {
    const { history, name, email, score } = this.props;
    addRanking(name, email, score);
    history.push('/ranking');
  };

	handlePlayAgain = () => {
    const { dispatch, history } = this.props;
    dispatch(restartScore(0));
    history.push('/');
  }

	render() {
		const { assertions, score } = this.props;
		const minAssertionsNumber = 3;
		return (
			<ContainerBlur>
				<StyledHeaderGroup>
					<img className="logo" src={logoTrivia} alt="trivia-game-logo" />
					<Header />
				</StyledHeaderGroup>
				<StyledSection>
					<StyledFeedbackMessage>
              {assertions >= minAssertionsNumber ? (
                <div>
                  <h2 data-testid="feedback-text">Well Done!</h2>
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Clapping%20Hands.png" alt="Clapping Hands" />
                </div>
              ) : (
                <div>
                  <h2 data-testid="feedback-text">Could be better...</h2>
                  <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Crying%20Face.png" alt="Crying Face" />
                </div>
              )}
						<section>
              <p>
                Você acertou{" "}
                <span data-testid="feedback-total-question">{assertions}</span>{" "}
                {assertions > 1 ? "questões!" : "questão!"}
              </p>
              <p>
                Um total de{" "}
                <span data-testid="feedback-total-score">{score}</span> pontos.
              </p>
            </section>
					</StyledFeedbackMessage>
					<StyledFeedbackButtons>
					<button
              data-testid="btn-play-again"
              type="button"
              onClick={() => this.handlePlayAgain()}
            >
              Play Again
            </button>
            <button
              data-testid="btn-ranking"
              type="button"
              onClick={() => this.handleRankingClick()}
            >
              Ranking
            </button>
					</StyledFeedbackButtons>
				</StyledSection>
			</ContainerBlur>
		);
	}
}

Feedback.propTypes = {
	assertions: PropTypes.number.isRequired,
	score: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	history: PropTypes.shape({
		push: PropTypes.func,
	}).isRequired,
};

const mapStateToProps = ({ player }) => ({
	assertions: player.assertions,
	score: player.score,
	email: player.gravatarEmail,
	name: player.name,
});

export default connect(mapStateToProps)(Feedback);
