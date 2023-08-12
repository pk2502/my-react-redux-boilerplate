import { call, takeEvery } from "redux-saga/effects";
import { CHANGE_SIDEBAR_TYPE } from "./actionTypes";

function changeBodyAttribute(attribute, value) {
  if (document.body) document.body.setAttribute(attribute, value);
  return true;
}

function manageBodyClass(cssClass, action = "toggle") {
  switch (action) {
    case "add":
      if (document.body) document.body.classList.add(cssClass);
      break;
    case "remove":
      if (document.body) document.body.classList.remove(cssClass);
      break;
    default:
      if (document.body) document.body.classList.toggle(cssClass);
      break;
  }
  return true;
}

function* changeLeftSidebarType({ payload: { sidebarType, isMobile } }) {
  try {
    switch (sidebarType) {
      case "compact":
        yield call(manageBodyClass, "vertical-collapsed", "remove");
        break;
      case "icon":
        yield call(manageBodyClass, "vertical-collapsed", "add");
        break;
      case "condensed":
        yield call(manageBodyClass, "sidebar-enable", "add");
        if (window.screen.width >= 998) {
          yield call(manageBodyClass, "vertical-collapsed", "remove");
          yield call(manageBodyClass, "sidebar-enable", "remove");
          yield call(manageBodyClass, "vertical-collapsed", "add");
          yield call(manageBodyClass, "sidebar-enable", "add");
        } else {
          yield call(manageBodyClass, "sidebar-enable", "add");
          yield call(manageBodyClass, "vertical-collapsed", "add");
        }
        break;
      default:
        yield call(changeBodyAttribute, "data-sidebar-size", "");
        yield call(manageBodyClass, "sidebar-enable", "remove");
        if (!isMobile)
          yield call(manageBodyClass, "vertical-collapsed", "remove");
        break;
    }
  } catch (error) {}
}

function* LayoutSaga() {
  yield takeEvery(CHANGE_SIDEBAR_TYPE, changeLeftSidebarType);
}

export default LayoutSaga;
