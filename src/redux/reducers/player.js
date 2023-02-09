const initialState = {
  name: '',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
};

const player = (state = initialState, { type }) => {
  switch (type) {
  // case first:
  //   return { ...state, ...payload };

  default:
    return state;
  }
};

export default player;
