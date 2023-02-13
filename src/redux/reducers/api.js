import { SAVE_CONFIG, SAVE_QUESTIONS } from '../actions';

const initialState = {
  results: [],
  categoryId: '',
  difficulty: '',
  type: '',
};

const api = (state = initialState, { type, payload }) => {
  switch (type) {
  case SAVE_QUESTIONS:
    return {
      ...state,
      results: payload,
    };
  case SAVE_CONFIG:
    return {
      ...state,
      ...payload,
    };
  default:
    return state;
  }
};

export default api;
