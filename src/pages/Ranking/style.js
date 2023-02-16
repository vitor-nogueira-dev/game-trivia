import styled from 'styled-components';

//Fundo Buir
export const ContainerBlur = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
    justify-content: center;
	gap: 12px;
	width: 650px;
	padding: 30px;

	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 0px 32px 0 var(--color-pink);
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.18);

    @media screen and (max-width: 768px) {
		justify-content: center;
		padding-top: 20px;
		gap: 20px;

		width: 350px;
		height: 680px;
	}
`;

//Conteudo do h1
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
        font-size: 50px;
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
        margin-top: 3px;
        height: 100%;
        font-size: 17px;
    }
    .inputScore{
        width: 50%;
        background:gray;
        border-radius:5px;
        padding: 10px;
        color: white;
        margin-right: 10px;
        margin-top: 3px;
        font-size: 17px;
    }
    
    .star{
        width: 50px;
        
    }

    @media screen and (max-width: 768px) {
        padding: 0;
        width: 370px;
        margin-right: 25px;
        
    .star{
        display: none;
    }
	}
`;

//Estilizaçao das Imagens
export const StyledImagens = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;
    
	.images{
        width: 50px;
        border-radius: 50%;
        margin-left:10px;
        box-shadow: 0 0px 5px 3px var(--color-azulSerenite);
    }

    @media screen and (max-width: 768px) {
    display: flex;
    width: 50px;
    /* padding: 55px; */
    .images{
        display: none;
    }
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
		padding: 10px;
		background-color: #2ca478;
	}
    button:hover {
    background: #2ca478;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 0 5px #2ca478, 0 0 10px #2ca478;
    }
`;