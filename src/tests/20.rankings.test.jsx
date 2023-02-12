import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import { addRanking } from '../services/rankingsService';

describe('Testando página rankings', () => {
  test('Verificando se a um botão na página que leva para a pagina de login', () => {
    const initialState = {
      player: {
        name: '',
        assertions: 0,
        score: 0,
        gravatarEmail: '',
      }
    }
    const route = '/ranking';
    const { history } = renderWithRouterAndRedux(<App />, initialState, route)
    const button = screen.getByTestId('btn-go-home');
    expect(button).toBeInTheDocument();
    
    userEvent.click(button);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  })
  
  test('Verificando se a lista de ranking é exibida corretamente', () => {
    const initialState = {
      player: {
        name: '',
        assertions: 0,
        score: 0,
        gravatarEmail: '',
      }
    }
    const route = '/ranking';
    addRanking('John Doe', 'johndoe@test.com', 74);
    addRanking('Laura Diniz', 'lauradiniz@test.com', 102);
    addRanking('milena', 'milena@test.com', 154);
    
    renderWithRouterAndRedux(<App />, initialState, route)
    
    const player0 = screen.getByTestId('player-name-0');
    const player1 = screen.getByTestId('player-name-1');
    const player2 = screen.getByTestId('player-name-2');
    expect(player0).toBeInTheDocument();
    expect(player1).toBeInTheDocument();
    expect(player2).toBeInTheDocument();
  })
})