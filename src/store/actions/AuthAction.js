export const LOGIN = 'LOGIN';
export const LOGIN_TOKEN = 'LOGIN_TOKEN';
export const LOGOUT = 'LOGOUT';

export const loginWithTokenAction = (token) => {
  return { type: LOGIN_TOKEN, token: token };
};

export const loginAction = (user, token) => {
  return { type: LOGIN, user: user, token: token };
};

export const logoutAction = () => {
  return { type: LOGOUT };
};
