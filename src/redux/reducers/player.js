import {
  SAVE_EMAIL,
  SAVE_NAME,
  UPDATE_SCORE,
  UPDATE_ASSERTIONS,
  RESTART_SCORE,
} from '../actions';

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
    return {
      ...state,
      score: state.score + payload,
    };
  case RESTART_SCORE:
    return {
      ...state,
      score: payload,
      assertions: payload,
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
