import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class PlayAgain extends Component {
  render() {
    const { history } = this.props;
    return (
      <button
        data-testid="btn-play-again"
        type="button"
        onClick={ () => history.push('/') }
      >
        Play Again
      </button>
    );
  }
}

PlayAgain.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
