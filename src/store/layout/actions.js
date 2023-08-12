import { CHANGE_SIDEBAR_TYPE } from "./actionTypes";

export const changeSidebarType = (sidebarType, isMobile) => ({
  type: CHANGE_SIDEBAR_TYPE,
  payload: { sidebarType, isMobile },
});
