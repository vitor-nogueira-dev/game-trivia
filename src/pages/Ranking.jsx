import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
import { getRanking } from '../services/rankingsService';
import { restartScore } from '../redux/actions';

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
    console.log(rankings);
    return (
      <div>
        <div>
          <h1 data-testid="ranking-title">Ranking</h1>
          { rankings.sort((a, b) => b.score - a.score).map((item, index) => (
            <div key={ index }>
              <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${MD5(item.email).toString()}` } alt="" />
              <p data-testid={ `player-name-${index}` }>{ item.nome }</p>
              <p data-testid={ `player-score-${index}` }>{ item.score }</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.handleClick }
        >
          Início
        </button>
      </div>
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
