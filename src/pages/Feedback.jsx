import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedback extends Component {
  render() {
    return (
      <div className="feedback-page">
        <Header />
      </div>
    );
  }
}

export default connect()(Feedback);
