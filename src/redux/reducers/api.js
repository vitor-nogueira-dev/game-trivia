import { SAVE_QUESTIONS } from '../actions';

const initialState = {
  results: [],
};

const api = (state = initialState, { type, payload }) => {
  switch (type) {
  case SAVE_QUESTIONS:

    return {
      ...state,
      results: payload,
    };

  default:
    return state;
  }
};

export default api;
