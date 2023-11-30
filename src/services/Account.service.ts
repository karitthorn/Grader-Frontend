import { AccountServiceAPI } from "../types/apis/Account.api";
import { AccountModel } from "../types/models/Account.model";
import { BASE_URL } from "../constants/BackendBaseURL";
import axios from 'axios';

export const AccountService: AccountServiceAPI = {
    create: async (request) => {
        const response = await axios.post<AccountModel>(`${BASE_URL}/api/accounts`, request);
        return response;
    },

    getAll: async () => {
        const response = await axios.get<{accounts: AccountModel[]}>(`${BASE_URL}/api/accounts`);
        return response;
    },

    get: async (id) => {
        const response = await axios.get<AccountModel>(`${BASE_URL}/api/accounts/${id}`);
        return response;
    }
}