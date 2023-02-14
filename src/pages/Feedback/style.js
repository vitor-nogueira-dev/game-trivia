import styled from "styled-components";

export const ContainerBlur = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 5rem;

	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0px 32px 0 var(--color-pink);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

	width: 600px;
	height: 400px;
`;

export const StyledHeaderGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	img {
		width: 6.75rem;
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
		gap: 0.5rem;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;

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
`;
