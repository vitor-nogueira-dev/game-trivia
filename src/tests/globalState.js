import { questionsResponse } from "./mocks";

const initialState = {
  player: {
    name: "Julia Rezende",
    assertions: 0,
    score: 0,
    gravatarEmail: "trybe@teste.com",
  },
  api: {
    results: questionsResponse.results,
  },
};

export default initialState;
