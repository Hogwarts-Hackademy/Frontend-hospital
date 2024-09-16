import BaseURL from "./baseURL";

const hospitalAPI = {
	CREATE_HOSPITAL_PROFILE_URL: `${BaseURL}/hospital-profiles/create`,
	FETCH_HOSPITAL_PROFILE_URL: `${BaseURL}/hospital-profiles/fetchone`,
	FETCH_ALL_HOSPITAL_PROFILES_URL: `${BaseURL}/hospital-profiles/fetchall`,
	ADD_DEPARTMENT_URL: `${BaseURL}/add-department`,
};

export default hospitalAPI;
