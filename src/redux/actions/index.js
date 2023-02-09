export const REQUEST_API = 'REQUEST_API';
export const REQUEST_TOKEN_API = 'REQUEST_TOKEN_API';

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

// export const requestTokenAPI = () => async (dispatch) => {
//   const response = await fetch(
//     'https://opentdb.com/api_token.php?command=request',
//   );
//   const data = await response.json();
//   dispatch(requestAPI(data.token));
// };
