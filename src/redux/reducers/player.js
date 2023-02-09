import { SAVE_EMAIL, SAVE_NAME } from '../actions';

const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = initialState, { type, payload }) => {
  switch (type) {
  case SAVE_EMAIL:
    return ({
      ...state,
      gravatarEmail: payload,
    });
  case SAVE_NAME:
    return ({
      ...state,
      name: payload,
    });

  default:
    return state;
  }
};

export default player;
