import axios from "axios";
import { GetAllProblemsByAccountResponse, ProblemServiceAPI, ValidateProgramResponse } from "../types/apis/Problem.api";
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

    getAllByAccount: async (accountId) => {
        return axios.get<GetAllProblemsByAccountResponse>(`${BASE_URL}/api/accounts/${accountId}/problems`);
    },

    get: async (problemId) => {
        return axios.get<ProblemPoplulateCreatorModel>(`${BASE_URL}/api/problems/${problemId}`);
    },

    update: async (problemId,request) => {
        return axios.put<ProblemModel>(`${BASE_URL}/api/problems/${problemId}`, request);
    },

    deleteMultiple: async (problemIds) => {
        return axios.put<null>(`${BASE_URL}/api/problems/`, {problem: problemIds});
    },

    validateProgram: async (request) => {
        return axios.post<ValidateProgramResponse>(`${BASE_URL}/api/problems/validate`, request);
    }
}