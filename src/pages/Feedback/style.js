import styled from "styled-components";

export const ContainerBlur = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	width: 350px;
	height: 600px;
	padding-top: 15px;

	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0px 32px 0 var(--color-pink);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	@media screen and (min-width: 768px) {
		flex-direction: row;
		justify-content: center;
		padding-top: 20px;
		gap: 5rem;

		width: 600px;
		height: 400px;
	}

`;

export const StyledHeaderGroup = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	padding-top: 10px;
	gap: 2rem;

	.logo {
		width: 8rem;
	}

	@media screen and (min-width: 1280px) {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: unset;
		padding-bottom: 40px;
		align-items: center;
		.logo {
			width: 8rem;
		}
	}

	@media screen and (min-width: 768px) and (max-width: 1279px) {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		justify-content: unset;
		padding-bottom: 40px;
		align-items: center;
		.logo {
			width: 8rem;
		}
	}
`;

export const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.9rem;
`;

export const StyledFeedbackMessage = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 2rem;
	gap: 2rem;

	height: 14rem;
	width: 16rem;

	background: rgba(255, 255, 255, 0.6);
	backdrop-filter: blur(4px);
	-webkit-backdrop-filter: blur(4px);
	border-radius: 0.52rem;
	border: 1px solid rgba(255, 255, 255, 0.18);

	h2 {
		font-size: 2rem;
		font-weight: 700;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.7rem;

		img {
			width: 3rem;
			height: 3rem;
		}
	}
`;

export const StyledFeedbackButtons = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 150px;

	button {
		color: #ebf0ec;
		font-weight: 800;
		font-size: 1rem;
		border: none;
		border-radius: 0.2rem;
		padding: 0.6rem 0.7rem;
		background-color: #2ca478;
	}

	button:hover {
		filter: brightness(1.2);
		cursor: pointer;
		transform: scale(1.1);
		transition: 200ms;
	}

	@media screen and (max-width: 767px) {
		width: 91%;
		margin-top: 10px;

		button {
			height: 60px;
			font-size: 1.4rem;
		}
	}
`;
