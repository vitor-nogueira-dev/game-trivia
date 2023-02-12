import { screen, waitForElementToBeRemoved } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Game from "../pages/Game";
import { questionsResponse } from "./mocks";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";

describe('Testando página Game', () => {
  test('Testando se clicando nas respostas corretas e incorreta ele avança para a próxima pergunta', async () => {
    global.fetch = jest.fn(async () => ({
      json: async () => questionsResponse,
    }));
    renderWithRouterAndRedux(<Game />);

    await waitForElementToBeRemoved(() => screen.getByText(/loading.../i));

    expect(screen.getByText(/Z boson/i)).toBeInTheDocument();
    userEvent.click(screen.getByText(/Z boson/i));

    expect(screen.getByTestId('btn-next')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('btn-next'));

    expect(screen.getByTestId('correct-answer')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('correct-answer'));
    expect(screen.getByTestId('btn-next')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('btn-next'));

    expect(screen.getByTestId('correct-answer')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('correct-answer'));
    expect(screen.getByTestId('btn-next')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('btn-next'));

    expect(screen.getByTestId('correct-answer')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('correct-answer'));
    expect(screen.getByText(/pontos:/i).textContent).toBe("Pontos:150")

    expect(screen.getByTestId('btn-next')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('btn-next'));

    expect(screen.getByTestId('correct-answer')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('correct-answer'));

    expect(screen.getByText(/pontos:/i).textContent).toBe("Pontos:250");

    expect(screen.getByTestId('btn-next')).toBeInTheDocument();
  })
})