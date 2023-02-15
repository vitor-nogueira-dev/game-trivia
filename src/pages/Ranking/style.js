import styled from 'styled-components';

//Fundo Buir
export const ContainerBlur = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
	gap: 12px;
	width: 650px;
	padding: 60px;

	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0px 32px 0 var(--color-pink);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

    @media screen and (max-width: 768px) {
		justify-content: center;
		padding-top: 20px;
		gap: 5rem;

		width: 350px;
		height: 610px;
	}


`;

//Conteudo dos rankings dos Players
export const StyledContentRaking = styled.div` 
	display: flex;
	flex-direction: column;
    align-items: center;
    justify-content: center;
	gap: 12px;

    h1{
        display: flex;
        width: 50%;
        color:white;
        gap:20px;
        align-items: center;
        justify-content: center;
        margin-bottom: 40px;
        font-size: 40px;
    }

    @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
	}

`;

//Estilizaçao das informaçoes do jogador/foto/star/nomes e ponto
export const StyledContentOfPlayers = styled.div` 
	display: flex;
	width: 600px;
    gap: 12px;
    align-items: center;
    justify-content: center;

    .inputName{
        width: 100%;
        background: gray;
        border-radius:5px;
        padding:10px;
        color:white;
        margin-top: 10px;
        height: 100%;
        font-size: 17px;
    }
    .inputScore{
        width: 50%;
        background:gray;
        border-radius:5px;
        padding: 10px;
        color: white;
        margin-left: 20px;
        margin-right: 10px;
        margin-top: 10px;
        font-size: 17px;
    }

    @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    gap: 15px;
    margin-top: 70px;
    width: 450px;
    margin-right: 100px;
	}
`;

//Estilizaçao das Imagens
export const StyledImagens = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    
	.images{
        width:75px;
        border-radius: 50%;
        margin-left:10px;
        box-shadow: 0 0px 5px 3px var(--color-azulSerenite);
    }

    .star{
        width: 75px;
    }

    @media screen and (max-width: 768px) {
    display: flex;
    width: 1000px;
    padding: 55px;
	}
`;

//Buttons styles
export const StyledButtonsRanking = styled.div` 
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	width: 150px;
    color: red;

    button {
        cursor: pointer;
		color: #ebf0ec;
		font-weight: 800;
		font-size: 1rem;
		border: none;
		border-radius: 0.2rem;
		padding: 0.6rem 0.7rem;
		background-color: #2ca478;
	}
    button:hover {
    background: #2ca478;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 0 5px #2ca478, 0 0 10px #2ca478;
    }
`;