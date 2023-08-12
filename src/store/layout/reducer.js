import { leftSidebarTypes } from "../../constants";
import { CHANGE_SIDEBAR_TYPE } from "./actionTypes";

const INIT_STATE = { leftSidebarType: leftSidebarTypes.DEFAULT };

const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CHANGE_SIDEBAR_TYPE:
      return { ...state, leftSidebarType: action.payload };
    default:
      return { ...state };
  }
};

export default Layout;
