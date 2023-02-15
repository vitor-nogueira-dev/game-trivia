import styled from 'styled-components';

export const ContainerBlur = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0px 32px 0 var(--color-pink);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 20px 0;
  margin: auto;

  img {
    width: 400px;
  }

  @media screen and (max-width: 840px) {
    flex-direction: column;

    img {
      display: none;
    }
  }

  @media screen and (max-width: 420px) {
    width: 90vw;
    height: 95vh;
  }
`;

export const Container = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  width: 400px;

  @media screen and (max-width: 420px) {
    width: 100%;
  }

  h1 {
    color: white;
    font-family: sans-serif;
    font-size: 2rem;
    margin-bottom: 30px;
  }

  button {
    text-transform: uppercase;
    background-color: var(--color-green);
    color: white;
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.95em;
    border: none;
    border-radius: 0.3em;
    cursor: pointer;

    &:hover {
      transition: 200ms;
      transform: scale(1.05);
    }
  }

  img {
    width: 240px;
    margin: auto;
    display: block;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Select = styled.select`
  font-size: 0.8rem;
  padding: 1em;
  border-radius: 0.3em;
  border: none;
  background-color: rgb(255, 255, 255, 0.2);
  color: white;
  display: block;
  cursor: pointer;
  width: 100%;

  &:focus {
    outline: 1px solid var(--color-azulSerenite);
    box-shadow: 0 0px 6px 2px #4ffef2;
  }

  option {
    font-size: 1em;
    background-color: gray;
  }
`;
