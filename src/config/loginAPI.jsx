import BaseURL from "./baseURL";

const loginAPI = {
	LOGIN_URL: `${BaseURL.LOCAL_BASE_URL}/staff-user/login`,
	REGISTER_URL: `${BaseURL.LOCAL_BASE_URL}/staff-user/register`,
	LOGOUT_URL: `${BaseURL.LOCAL_BASE_URL}/staff-user/logout`,
};

export default loginAPI;
