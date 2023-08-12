import { combineReducers } from "redux";
import Auth from "./auth/reducer";
import Layout from "./layout/reducer";

const rootReducer = combineReducers({ Auth, Layout });

export default rootReducer;
