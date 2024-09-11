import BaseURL from "./baseURL";

const loginAPI = {
	LOGIN_URL: `${BaseURL.LOCAL_BASE_URL}/user/login`,
	REGISTER_URL: `${BaseURL.LOCAL_BASE_URL}/user/register`,
	LOGOUT_URL: `${BaseURL.LOCAL_BASE_URL}/user/logout`,
};

export default loginAPI;
