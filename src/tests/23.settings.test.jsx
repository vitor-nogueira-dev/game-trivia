import { screen, waitFor } from "@testing-library/react";
import renderWithRouterAndRedux from "./helpers/renderWithRouterAndRedux";
import App from "../App";
import userEvent from "@testing-library/user-event";

describe('Testando a página de configurações', () => {
  test('Testando inputs na página Settings', async () => {
    const { history } = renderWithRouterAndRedux(<App />, undefined, '/settings');

    const selectCategory = screen.getByTestId('category');
    const selectDifficulty = screen.getByTestId('difficulty');
    const selectType = screen.getByTestId('type');

    expect(selectCategory).toBeInTheDocument();
    expect(selectDifficulty).toBeInTheDocument();
    expect(selectType).toBeInTheDocument();

    await waitFor(() => {
      userEvent.selectOptions(selectCategory, '9');
    })
    userEvent.selectOptions(selectDifficulty, 'medium');
    userEvent.selectOptions(selectType, 'boolean');

    userEvent.click(screen.getByText(/jogar/i));
    await waitFor(() => {
      expect(history.location.pathname).toBe('/game');
    })
  })
})