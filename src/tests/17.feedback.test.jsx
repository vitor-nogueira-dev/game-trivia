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
  it('Renderiza corretamente os elementos do Header tela de feedback', () => {
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

  it('Renderiza corretamente a section de mensagens de feedback | Could be better...', () => {
    const initialState = {
      player: {
        name: 'John Doe',
        assertions: 1,
        score: 52,
        gravatarEmail: 'johndoe@test.com',
      }
    }
    const route = '/feedback'
    renderWithRouterAndRedux(<App />, initialState, route );

    const feedbackText = screen.getByRole('heading', { level: 2, name: /could be better/i });
    expect(feedbackText).toBeInTheDocument();

    const assertions = screen.getByText('1');
    const assertionsMessage = screen.getByText(/você acertou questão!/i)
    expect(assertions).toBeInTheDocument();
    expect(assertionsMessage).toBeInTheDocument();

    const scoreMessage = screen.getByText(/um total de pontos/i)
    expect(within(scoreMessage).getByText('52')).toBeInTheDocument();
  })

  it('Renderiza corretamente a section de mensagens de feedback | Well done!', () => {
    const initialState = {
      player: {
        name: 'John Doe',
        assertions: 4,
        score: 112,
        gravatarEmail: 'johndoe@test.com',
      }
    }
    const route = '/feedback'
    renderWithRouterAndRedux(<App />, initialState, route );

    const feedbackText = screen.getByRole('heading', { level: 2, name: /well done/i });
    expect(feedbackText).toBeInTheDocument();

    const assertions = screen.getByText('4');
    const assertionsMessage = screen.getByText(/você acertou questões!/i)
    expect(assertions).toBeInTheDocument();
    expect(assertionsMessage).toBeInTheDocument();

    const scoreMessage = screen.getByText(/um total de pontos/i)
    expect(within(scoreMessage).getByText('112')).toBeInTheDocument();
  })

  it('É redirecionado para a página de login ao clicar no botão Play Again', () => {
    const initialState = {
      player: {
        name: 'John Doe',
        assertions: 2,
        score: 74,
        gravatarEmail: 'johndoe@test.com',
      }
    }
    const route = '/feedback'
    const { history } = renderWithRouterAndRedux(<App />, initialState, route );

    const rankingBtn = screen.getByRole('button', { name: /play again/i });
    expect(rankingBtn).toBeInTheDocument();

    userEvent.click(rankingBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  })

  it('É redirecionado para a página de ranking ao clicar no botão ranking', () => {
    const initialState = {
      player: {
        name: 'John Doe',
        assertions: 2,
        score: 74,
        gravatarEmail: 'johndoe@test.com',
      }
    }
    const route = '/feedback'
    const { history } = renderWithRouterAndRedux(<App />, initialState, route );

    const rankingBtn = screen.getByRole('button', { name: /ranking/i });
    expect(rankingBtn).toBeInTheDocument();

    userEvent.click(rankingBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/ranking');
  })
})