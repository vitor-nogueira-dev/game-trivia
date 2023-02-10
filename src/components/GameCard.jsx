import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameCard extends Component {
  render() {
    return (
      <div>GameCard</div>
    );
  }
}

export default connect()(GameCard);

// shuffleArray = (array) => {
//   const number = 0.5;
//   return array.sort(() => Math.random() - number);
// };

// checkAnswer = (selectedAnswer, correctAnswer) => {
//   let borderColor = 'red';
//   if (selectedAnswer === correctAnswer) {
//     borderColor = 'rgb(6, 240, 15)';
//   }
//   this.setState({
//     selectedAnswer,
//     borderColor,
//   });
// };
// handleQuestions = () => {
//   const { questionIndex } = this.state;
//   const { results } = this.state;
//   console.log(results);
//   const {
//     category,
//     question,
//     correct_answer: correctAnswer,
//     incorrect_answers: incorrectAnswers,
//   } = results[questionIndex];

//   const shuffled = this.shuffleArray([correctAnswer, ...incorrectAnswers]);
//   console.log(shuffled);
//   this.setState({
//     category,
//     question,
//     correctAnswer,
//     shuffled,
//   });
// };
