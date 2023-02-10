import { SAVE_QUESTIONS } from '../actions';

const initialState = {
  response: '',
  results: [],
  index: 0,
};

const api = (state = initialState, { type, payload }) => {
  switch (type) {
  case SAVE_QUESTIONS:

    return {
      ...state,
      response: payload.response_code,
      results: payload.results,
    };

  default:
    return state;
  }
};

export default api;
