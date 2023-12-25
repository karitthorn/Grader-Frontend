import axios from "axios";
import { GetAllSubmissionsResponse, SubmissionServiceAPI, SubmitProblemResponse } from "../types/apis/Submission.api";
import { GetSubmissionByAccountProblemResponse, SubmissionModel, SubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Submission.model";
import { BASE_URL } from "../constants/BackendBaseURL";

export const SubmissionService: SubmissionServiceAPI = {
    submit: async (accountId, problemId, request) => {
        const response = await axios.post<SubmissionPopulateSubmissionTestcasesSecureModel>(`${BASE_URL}/api/accounts/${accountId}/problems/${problemId}/submissions`,request);
        return response;
    },

    topicSubmit: async (accountId,topicId, problemId, request) => {
        const response = await axios.post<SubmissionPopulateSubmissionTestcasesSecureModel>(`${BASE_URL}/api/accounts/${accountId}/topics/${topicId}/problems/${problemId}/submissions`,request);
        return response;
    },

    getByAccountProblem: async (accountId, problemId) => {
        const response = await axios.get<GetSubmissionByAccountProblemResponse>(`${BASE_URL}/api/accounts/${accountId}/problems/${problemId}/submissions`);
        return response;
    },

    getByAccountProblemInTopic: async (accountId, problemId, topicId) => {
        const response = await axios.get<GetSubmissionByAccountProblemResponse>(`${BASE_URL}/api/accounts/${accountId}/topics/${topicId}/problems/${problemId}/submissions`);
        return response;
    },

    getAll: async (query) => {
        const response = await axios.get<GetAllSubmissionsResponse>(`${BASE_URL}/api/submissions`,{params:query});
        return response;
    }
}