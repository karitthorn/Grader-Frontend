import axios from "axios";
import { ProblemServiceAPI } from "../types/apis/Problem.api";
import { BASE_URL } from "../constants/BackendBaseURL";
import {  ProblemModel, ProblemPoplulateCreatorModel } from "../types/models/Problem.model";
import { ErrorResponse } from "../types/apis/ErrorHandling";

export const ProblemService: ProblemServiceAPI = {
    create: async (accountId,request) => {
        return axios.post<ProblemModel>(`${BASE_URL}/api/accounts/${accountId}/problems`, request);
    },

    getAll: async (accountId) => {
        return axios.get<{problems: ProblemPoplulateCreatorModel[]}>(`${BASE_URL}/api/problems?account_id=${accountId}`);
    },

    get: async (problemId) => {
        return axios.get<ProblemPoplulateCreatorModel>(`${BASE_URL}/api/problems/${problemId}`);
    },

    update: async (problemId,request) => {
        return axios.put<ProblemModel>(`${BASE_URL}/api/problems/${problemId}`, request);
    },

    deleteMultiple: async (problemIds) => {
        return axios.put<null>(`${BASE_URL}/api/problems/`, {problem: problemIds});
    }
}