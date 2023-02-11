import { screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MD5 } from 'crypto-js';
import App from '../App';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';


// const initialState = {
//   player: {
//     name: 'John Doe',
//     assertions: 0,
//     score: 0,
//     gravatarEmail: '',
//   }
// }

describe("testa a página de feedback", () => {
  test('Renderiza corretamente os elementos do Header tela de feedback', () => {
    const initialState = {
      player: {
        name: 'John Doe',
        assertions: 3,
        score: 74,
        gravatarEmail: 'johndoe@test.com',
      }
    }
    const route = '/feedback'
    renderWithRouterAndRedux(<App />, initialState, route );

    const playerGravatar = screen.getByRole('img');
    expect(playerGravatar).toBeInTheDocument();
    expect(playerGravatar.src).toBe(`https://www.gravatar.com/avatar/${MD5(initialState.player.gravatarEmail).toString()}`);

    const playerName = screen.getByText(/john doe/i);
    expect(playerName).toBeInTheDocument();

    const playerScore = screen.getByText(/pontos:/i);
    expect(playerScore).toBeInTheDocument();
    expect(within(playerScore).getByText(/74/i)).toBeInTheDocument();
  })
})