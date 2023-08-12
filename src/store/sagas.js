import { all, fork } from "redux-saga/effects";
import authSaga from "./auth/saga";
import LayoutSaga from "./layout/saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(LayoutSaga)]);
}
