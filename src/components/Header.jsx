import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { MD5 } from "crypto-js";

export const StyledHeader = styled.header`
	color: white;
	font-size: 1.2rem;
	font-weight: 700;
	display: flex;
	flex-direction: column;
  align-items: center;
  gap: 0.2rem;

	img {
		width: 5rem;
		border-radius: 999px;
    box-shadow: 0 0px 5px 3px var(--color-azulSerenite);
	}

	.player-info {
		display: flex;
		flex-direction: column;
    align-items: center;
    gap: 0.5rem;
	}
`;

class Header extends Component {
	render() {
		const { score, email, name } = this.props;
		return (
			<StyledHeader>
				<div className="player-info">
					<img
						data-testid="header-profile-picture"
						src={`https://www.gravatar.com/avatar/${MD5(email).toString()}`}
						alt=""
					/>
					<span data-testid="header-player-name">{name}</span>
				</div>
				<div className="score-info">
					<p>
						Pontos:
						<span data-testid="header-score">{score}</span>
					</p>
				</div>
			</StyledHeader>
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
