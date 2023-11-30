import axios from "axios";
import { SubmissionServiceAPI, SubmitProblemResponse } from "../types/apis/Submission.api";
import { GetSubmissionByAccountProblemResponse, SubmissionModel } from "../types/models/Submission.model";
import { BASE_URL } from "../constants/BackendBaseURL";

export const SubmissionService: SubmissionServiceAPI = {
    submit: async (accountId, problemId, request) => {
        const response = await axios.post<SubmitProblemResponse>(`${BASE_URL}/api/accounts/${accountId}/problems/${problemId}/submissions`,request);
        return response;
    },

    getByAccountProblem: async (accountId, problemId) => {
        const response = await axios.get<GetSubmissionByAccountProblemResponse>(`${BASE_URL}/api/accounts/${accountId}/problems/${problemId}/submissions`);
        return response;
    }
}