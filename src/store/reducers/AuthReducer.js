import { LOGIN, LOGIN_TOKEN, LOGOUT } from '../actions/AuthAction';
import { getCurrentUserWithToken } from '../../api/user';

const initialAuthState = {
  user: null,
  token: null,
};

const handleLoginWithToken = (state, token) => {
  return getCurrentUserWithToken(token).then((res) => {
    const user = res.data;
    if (user) {
      saveTokenToStorage(token);
      return {
        ...state,
        user: user,
        token: token,
      };
    }

    return {
      ...state,
    };
  });
};

const handleLogin = (state, user, token) => {
  saveTokenToStorage(token);
  return {
    ...state,
    user: user,
    token: user.token,
  };
};

const handleLogout = (state) => {
  return {
    ...state,
    user: null,
    token: null,
  };
};

const saveTokenToStorage = async (token) => {
  try {
    localStorage.setItem('token', token);
  } catch (e) {
    console.log(e);
  }
};

const authReducer = (state = initialAuthState, action) => {
  let { type, user, token } = action;
  switch (type) {
    case LOGIN:
      return handleLogin(state, user, token);
    case LOGIN_TOKEN:
      return handleLoginWithToken(state, token);
    case LOGOUT:
      return handleLogout(state);
    default:
      return {
        ...state,
      };
  }
};

export default authReducer;
