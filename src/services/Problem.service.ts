import axios from "axios";
import { ProblemServiceAPI } from "../types/apis/Problem";
import { BASE_URL } from "../constants/BackendBaseURL";
import { Problem, ProblemPoplulateCreator } from "../types/models/Problem";
import { ErrorResponse } from "../types/apis/ErrorHandling";

export const ProblemService: ProblemServiceAPI = {
    create: async (accountId,request) => {
        return axios.post<Problem | ErrorResponse>(`${BASE_URL}/api/accounts/${accountId}/problems`, request);
    },

    getAll: async (accountId) => {
        return axios.get<{problems: ProblemPoplulateCreator[]} | ErrorResponse>(`${BASE_URL}/api/problems?account_id=${accountId}`);
    },

    get: async (problemId) => {
        return axios.get<ProblemPoplulateCreator>(`${BASE_URL}/api/problems/${problemId}`);
    },

    update: async (problemId,request) => {
        return axios.put<Problem | ErrorResponse>(`${BASE_URL}/api/problems/${problemId}`, request);
    },

    deleteMultiple: async (problemIds) => {
        return axios.put<null | ErrorResponse>(`${BASE_URL}/api/problems/`, {problem: problemIds});
    }
}