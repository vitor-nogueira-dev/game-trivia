
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { MD5 } from 'crypto-js';
import { getRanking } from '../services/rankings';

class Ranking extends Component {
  state = {
    rankings: [],
  };

  componentDidMount() {
    const ranking = getRanking();
    this.setState({ rankings: ranking });
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { rankings } = this.state;

    return (
      <div>
        <div>
          <h1 data-testid="ranking-title">Ranking</h1>
          { rankings.map((item) => <div key={ item }>{item}</div>)}
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
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const mapStateToProps = ({ player }) => ({
  score: player.score,
  email: player.gravatarEmail,
  name: player.name,
});

export default connect(mapStateToProps)(Ranking);
