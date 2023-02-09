export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_NAME = 'SAVE_NAME';

export const getToken = async () => {
  const response = await fetch('https://opentdb.com/api_token.php?command=request');
  const data = await response.json();
  localStorage.setItem('token', data.token);
  return data;
};

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const saveName = (name) => ({
  type: SAVE_NAME,
  payload: name,
});
