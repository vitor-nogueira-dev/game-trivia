import styled from 'styled-components';

const ContainerBlur = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0px 32px 0 var(--color-pink);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: ${(props) => props.padding};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  flex-direction: column;

  @media screen and (max-width: 820px) {
    width: 680px;
    height: 500px;
  }

  @media screen and (max-width: 768px) {
    height: 600px;
    width: 360px;
    display: flex;
    justify-content: center;
    padding: 100px;
    align-items: center;
    button {
      width: 50%;
    }
  }
`;

const QuestionsContent = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5px;


  p {
    font-size: 22px;
    color: var(--color-azulSerenite);
  }

  @media screen and (max-width: 820px) {
    p {
      font-size: 25px;
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`;

const ContainerButtons = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  gap: 2px;
  width: 100%;

  button {
    cursor: pointer;
    border: none;
    border-radius: 5px;
    margin: 5px;
    margin-top: 30px;
    padding: 12px 3px;
    box-sizing: border-box;
    width: 100%;
    max-width: 300px;
    height: 50px;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column;
    height: 170px;
    width: 300px;

    button {
      width: 135px;
      margin-top: 10px;

      flex-grow: 1;
    }
  }
`;

const BotaoNext = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  

  button {
    cursor: pointer;
    border: none;

    border-radius: 5px;
    margin-top: 13px;
    padding: 12px 3px;
    box-sizing: border-box;
    width: 100%;
    height: 50px;

    background-color: var(--color-azulSerenite);

    font-size: 18px;
    font-weight: 600;
  }

  button:hover {
    background: #03e9f4;
    color: #000;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 10px #03e9f4;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    button {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px) {
    justify-content: center;

    button {
      width: 100px;
      margin-bottom: 30px;
    }
  }
`;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 820px) {
    button {
      width: 135px;
      margin-top: 10px;
    }

    h3 {
      width: 550px;
    }
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 30px;

    h1 {
      font-size: large;
      width: 300px;
      text-align: center;
    }
    h3 {
      font-size: medium;
      font-weight: 600;
      text-align: center;
      width: 300px;
    }
  }
`;

export {
  ContainerBlur,
  QuestionsContent,
  ContainerButtons,
  BotaoNext,
  Container,
};
