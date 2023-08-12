import { call, put, takeEvery } from "redux-saga/effects";
import { userLogin } from "../../helpers/backend_helper";
import { apiError, loginUserSuccess } from "./actions";
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes";

function* loginUser({ payload: { user, history } }) {
  try {
    const response = yield call(userLogin, {
      username: user.username,
      password: user.password,
    });
    yield put(loginUserSuccess(response));
  } catch (error) {
    yield put(apiError(error));
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.clear();
    history.push("/login");
  } catch (error) {
    yield put(apiError(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser);
  yield takeEvery(LOGOUT_USER, logoutUser);
}

export default authSaga;
