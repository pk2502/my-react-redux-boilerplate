import { post } from "./api_helper";
import * as url from "./url_helper";

const userLogin = (userData) => post(url.USER_LOGIN, userData);

export { userLogin };
