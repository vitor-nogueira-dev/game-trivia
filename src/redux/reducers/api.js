import { REQUEST_API } from '../actions';

const initialState = {
  response: '',
  results: [],
};

const api = (state = initialState, { type, payload }) => {
  switch (type) {
  case REQUEST_API:
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
