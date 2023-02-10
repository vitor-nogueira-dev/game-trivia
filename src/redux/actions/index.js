export const REQUEST_API = 'REQUEST_API';
export const REQUEST_TOKEN_API = 'REQUEST_TOKEN_API';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_NAME = 'SAVE_NAME';

export const getToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  return localStorage.setItem('token', data.token);
};

export const actionRequestAPI = (payload) => ({
  type: REQUEST_API,
  payload,
});

export const requestAPI = (token) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://opentdb.com/api.php?amount=5&token=${token}`,
    );
    const data = await response.json();
    return dispatch(actionRequestAPI(data));
  } catch (error) {
    console.warn(error);
  }
};

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const saveName = (name) => ({
  type: SAVE_NAME,
  payload: name,
});
