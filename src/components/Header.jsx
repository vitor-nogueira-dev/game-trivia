import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MD5 } from 'crypto-js';

class Header extends Component {
  render() {
    const { score, email, name } = this.props;
    return (
      <header>
        <div className="player-info">
          <img data-testid="header-profile-picture" src={ `https://www.gravatar.com/avatar/${MD5(email).toString()}` } alt="" />
          <span data-testid="header-player-name">{name}</span>
        </div>
        <div className="score-info">
          <p>
            Pontos:
            <span data-testid="header-score">{score}</span>
          </p>
        </div>
      </header>
    );
  }
}

const mapStateToProps = ({ player }) => ({
  score: player.score,
  email: player.gravatarEmail,
  name: player.name,
});

Header.propTypes = {
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Header);
