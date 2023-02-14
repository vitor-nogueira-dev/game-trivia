import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 12px;

  width: 400px;
  padding: 50px;

  border: 2px solid red;

  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0px 32px 0 var(--color-pink);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  .btn-settings {
    background-color: gray;
  }

  img {
    width: 240px;
  }

  @media screen and (max-width: 768px) {
    height: 600px;
    width: 360px;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  gap: 12px;
`;

export const Input = styled.input`
  padding: 15px;
  width: 300px;

  border-radius: 8px;

  border: none;
  outline: none;

  cursor: pointer;

  background-color: rgba(255, 255, 255, 0.2);
  color: white;

  &:focus {
    box-shadow: 0 0px 7px 3px #4ffef2;
  }
  ::placeholder {
    color: white;
  }
`;

export const Button = styled.button`
  width: 144px;
  height: 45px;

  background: #2fc18c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  cursor: pointer;

  border: none;

  font-weight: bolder;
  text-transform: uppercase;
  color: gray;

  &:enabled {
    color: white;
  }

  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition: 0.3s;
    filter: brightness(1.1);
  }
`;
