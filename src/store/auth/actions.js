import {
  LOGIN_API_ERROR,
  LOGIN_SUCCESS,
  LOGIN_USER,
  LOGOUT_SUCCESS,
  LOGOUT_USER,
} from "./actionTypes";

export const loginUser = (user, history) => ({
  type: LOGIN_USER,
  payload: { user, history },
});

export const loginUserSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const logoutUser = (history) => {
  return {
    type: LOGOUT_USER,
    payload: { history },
  };
};

export const logoutUserSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const apiError = (error) => {
  return {
    type: LOGIN_API_ERROR,
    payload: error,
  };
};
