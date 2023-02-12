import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import { screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import { questionsResponse } from "./mocks";
import userEvent from "@testing-library/user-event";
import initialState from "./globalState";
import Game from "../pages/Game";
import { act } from "react-dom/test-utils";


describe('Testando o timer', () => {
  test('Testando se o timer está funcionando corretamente', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => questionsResponse,
    }));
    jest.useFakeTimers();
    const { history } = renderWithRouterAndRedux(<Game />, initialState, '/game');

    await waitFor(() => expect(history.location.pathname).toBe('/game'));

    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i), { timeout: 3000 });

    act(() => {
      jest.advanceTimersByTime(32 * 1000);
    });
    expect(screen.getByText('Timer: 0s')).toBeInTheDocument();
  })
  
  test('Testando se o timer está funcionando corretamente 30-29-28', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => questionsResponse,
    }));
    const { history } = renderWithRouterAndRedux(<Game />, initialState, '/game');

    await waitFor(() => expect(history.location.pathname).toBe('/game'));

    await waitFor(() => expect(fetch).toHaveBeenCalled());

    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i), { timeout: 3000 });

    expect(screen.getByText('Timer: 30s')).toBeInTheDocument();

    await waitFor(() => expect(screen.getByText('Timer: 29s')).toBeInTheDocument(), { timeout: 1500 });
    await waitFor(() => expect(screen.getByText('Timer: 28s')).toBeInTheDocument(), { timeout: 1500 });

    userEvent.click(screen.getByTestId('correct-answer'));
    expect(screen.getByText('Timer: 28s')).toBeInTheDocument();
  })
})