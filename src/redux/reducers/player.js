import { SAVE_EMAIL, SAVE_NAME, UPDATE_SCORE, UPDATE_ASSERTIONS } from '../actions';

const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = initialState, { type, payload }) => {
  switch (type) {
  case SAVE_EMAIL:
    return {
      ...state,
      gravatarEmail: payload,
    };
  case SAVE_NAME:
    return {
      ...state,
      name: payload,
    };
  case UPDATE_SCORE:
    console.log(payload);
    return {
      ...state,
      score: state.score + payload,
    };
  case UPDATE_ASSERTIONS:
    return {
      ...state,
      assertions: state.assertions + 1,
    };

  default:
    return state;
  }
};

export default player;
