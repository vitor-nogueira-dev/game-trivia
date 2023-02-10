import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';
import { act } from 'react-dom/test-utils';
import Login from '../pages/Login';
import userEvent from '@testing-library/user-event';

describe('Cobertura da tela de login.', () => {
  test('Verificando inputs da tela de login', () => {
    renderWithRouterAndRedux(<App />);
    const inputName = screen.getByTestId('input-player-name')
    const inputEmail = screen.getByTestId('input-gravatar-email')
    expect(inputName).toBeInTheDocument();
    expect(inputEmail).toBeInTheDocument();
    
  })
  test('Verificando botões da tela de login', () => {
    renderWithRouterAndRedux(<App />);
    const buttonPlay = screen.getByRole('button', { name: 'Play' });
    expect(buttonPlay).toBeInTheDocument();
    expect(buttonPlay).toBeDisabled();
    
    const buttonSettings = screen.getByRole('button', { name: 'Settings' })
    expect(buttonSettings).toBeInTheDocument();
  })
  
  test('Validando os campos de nome e email da página de login', async () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const inputName = screen.getByTestId('input-player-name');
    const testName = 'Lucas';
    userEvent.type(inputName, testName)
    expect(inputName.value).toBe('Lucas');
    
    const inputEmail = screen.getByTestId('input-gravatar-email')
    const testEmail = 'milena@milena.com';
    userEvent.type(inputEmail, testEmail)
    expect(inputEmail.value).toBe('milena@milena.com');
    
    const buttonPlay = screen.getByRole('button', { name: 'Play' });
    expect(buttonPlay).toBeInTheDocument();
    expect(buttonPlay).toBeEnabled();
    userEvent.click(buttonPlay);
    // expect(history.location.pathname).toBe('/rgrgf')
    
    
    await waitFor(() => expect(history.location.pathname).toBe('/game'));
    // const title = screen.getByRole('heading', { name: /Hello World/i });
    // expect(title).toBeInTheDocument();
  })
  
  test('Testando rota pra settings', () => {
    renderWithRouterAndRedux(<App />)
    const buttonSetting = screen.getByRole('button', { name: /Settings/i });
    expect(buttonSetting).toBeInTheDocument();
    userEvent.click(buttonSetting);
    const title = screen.getByRole('heading', { name: /Settings/i });
    expect(title).toBeInTheDocument();
  })
  
});
