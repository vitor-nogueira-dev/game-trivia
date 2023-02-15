import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
import { getRanking } from '../../services/rankingsService';
import { restartScore } from '../../redux/actions';
import { ContainerBlur, StyledButtonsRanking, StyledContentRaking,StyledContentOfPlayers, StyledImagens } from "./style.js";

class Ranking extends Component {
  state = {
    rankings: [],
  };

  componentDidMount() {
    const rankings = getRanking();
    this.setState({ rankings });
  }

  handleClick = () => {
    const { dispatch, history } = this.props;
    dispatch(restartScore(0));
    history.push('/');
  };

  render() {
    const { rankings } = this.state;
    return (
      <ContainerBlur>
        <StyledContentRaking>
          <h1 data-testid="ranking-title">Ranking</h1>
          {rankings.sort((a, b) => b.score - a.score).map((item, index) => (
            <StyledContentOfPlayers key={ index }>
              <StyledImagens>
              <img className='images' data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${MD5(item.email).toString()}` } alt="" />
              
              </StyledImagens>
              <p className='inputName'data-testid={ `player-name-${index}` }>{item.nome}</p>
              <p className='inputScore'data-testid={ `player-score-${index}` }>Score: {item.score}</p>
              <img className= 'star'src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/tarikul-islam-anik/main/assets/images/Star.png" alt="Star" />
            </StyledContentOfPlayers>
          ))}
        </StyledContentRaking>
        <StyledButtonsRanking>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleClick }
        >
          Início
        </button>
        </StyledButtonsRanking>
      </ContainerBlur>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player }) => ({
  score: player.score,
  email: player.gravatarEmail,
  name: player.name,
});

export default connect(mapStateToProps)(Ranking);
