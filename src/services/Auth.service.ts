import axios from "axios";
import { AuthServiceAPI } from "../types/apis/Auth";
import { BASE_URL } from "../constants/BackendBaseURL";

export const AuthService: AuthServiceAPI = {
    login: async (request) => {
        const response = await axios.post(`${BASE_URL}/api/login`, request);
        console.log(response)
        return response.data;
    },

    logout: async (request) => {
        const response = await axios.post(`${BASE_URL}/api/logout`, request);
        return response.data;
    },

    authorize: async (request) => {
        const response = await axios.put(`${BASE_URL}/api/token`, request);
        return response.data;
    }

}