import axios from "axios";
import { GetAllProblemsByAccountResponse, GetAllProblemsResponse, ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel, ProblemServiceAPI, ValidateProgramResponse } from "../types/apis/Problem.api";
import { BASE_URL } from "../constants/BackendBaseURL";
import {  ProblemModel, ProblemPoplulateCreatorModel } from "../types/models/Problem.model";
import { ErrorResponse } from "../types/apis/ErrorHandling";

export const ProblemService: ProblemServiceAPI = {
    create: async (accountId,request) => {
        return axios.post<ProblemModel>(`${BASE_URL}/api/accounts/${accountId}/problems`, request);
    },

    getAll: async () => {
        return axios.get<GetAllProblemsResponse>(`${BASE_URL}/api/problems`);
    },

    getAllAsCreator: async (accountId) => {
        return axios.get<GetAllProblemsByAccountResponse>(`${BASE_URL}/api/accounts/${accountId}/problems`);
    },

    get: async (accountId,problemId) => {
        return axios.get<ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel>(`${BASE_URL}/api/accounts/${accountId}/problems/${problemId}`);
    },

    update: async (problemId,request) => {
        return axios.put<ProblemModel>(`${BASE_URL}/api/problems/${problemId}`, request);
    },

    delete: async (problemId) => {
        return axios.delete<null>(`${BASE_URL}/api/problems/${problemId}`);
    },

    // deleteMultiple: async (problemIds) => {
    //     return axios.delete<null>(`${BASE_URL}/api/problems/`, {problem: problemIds});
    // },

    updateGroupPermissions: async (problemId, accountId,groups) => {
        return axios.put<ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel>(`${BASE_URL}/api/accounts/${accountId}/problems/${problemId}/groups`, {groups});
    },

    validateProgram: async (request) => {
        return axios.post<ValidateProgramResponse>(`${BASE_URL}/api/problems/validate`, request);
    }
}