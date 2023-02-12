import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import App from "../App";
import Game from "../pages/Game";
import initialState from "./globalState";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { invalidTokenQuestionsResponse, questionsResponse } from "./mocks";

describe('Testando a página Game', () => {
  test('Testando se quando o retorno da api for inválido ele redireciona o usuário para a página de login', async () => {

    global.fetch = jest.fn(async () => ({
      json: async () => invalidTokenQuestionsResponse,
    }));

    const { history } = renderWithRouterAndRedux(<Game />, undefined, '/game');

    expect(history.location.pathname).toBe('/game');
    await waitFor(() => {
      expect(fetch).toHaveBeenCalled();
      localStorage.removeItem('token');
      history.push('/')
      expect(history.location.pathname).toBe('/');
    });
  })

  test('Testando quando a api retorna as questões válidas', () => {
    global.fetch = jest.fn(async () => ({
      json: async () => questionsResponse,
    }));

    const { history, store } = renderWithRouterAndRedux(<Game />, initialState, '/game')

    expect(history.location.pathname).toBe('/game');

    act(() => expect(store.getState()).toMatchObject(initialState))
  })
  
  test('Testando se as questões são embaralhadas e se é possível ir para a próxima', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => questionsResponse,
    })

    const { history } = renderWithRouterAndRedux(<App />, initialState, '/game');

    await waitFor(() => expect(history.location.pathname).toBe('/game'));

    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i), { timeout: 3000 });

    expect(screen.getByTestId('header-score').textContent).toBe('0')

    for (let index = 0; index < 5; index += 1) {
      userEvent.click(screen.getByTestId('correct-answer'))
      await waitFor(() => {
        userEvent.click(screen.getByTestId('btn-next'))
      }, { timeout: 2000 })
    }
    expect(screen.getByTestId('header-score').textContent).toBe('350')
  });
})
