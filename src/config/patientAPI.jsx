import BaseURL from "./baseURL";

const patientAPI = {
	REGISTER_NEW_PATIENT_URL: `${BaseURL.LOCAL_BASE_URL}/patient/register`,
	FETCH_ALL_PATIENTS_URL: `${BaseURL.LOCAL_BASE_URL}/patient/fetchall`,
	FETCH_SINGLE_PATIENT_URL: `${BaseURL.LOCAL_BASE_URL}/patient/fetchone`,
	VISIT_HISTORY_URL: `${BaseURL.LOCAL_BASE_URL}/patient/get-visithistory`,
};

export default patientAPI;
