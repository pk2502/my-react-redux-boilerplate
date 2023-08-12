import {
  LOGIN_API_ERROR,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT_SUCCESS,
  LOGOUT_USER,
} from "./actionTypes";

const INIT_STATE = { error: "", loading: false };

const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER:
      state = { ...state, loading: true };
      break;
    case LOGIN_SUCCESS:
      state = { ...state, loading: false };
      break;
    case LOGOUT_USER:
      state = { ...state };
      break;
    case LOGOUT_SUCCESS:
      state = { ...state };
      break;
    case LOGIN_API_ERROR:
      state = { ...state, error: action.payload, loading: false };
      break;
    default:
      state = { ...state };
      break;
  }
  return state;
};

export default Auth;
