import axios from "axios";
import { SubmissionServiceAPI } from "../types/apis/Submission";
import { GetSubmissionByAccountProblemResponse, Submission } from "../types/models/Submission";
import { BASE_URL } from "../constants/BackendBaseURL";

export const SubmissionService: SubmissionServiceAPI = {
    submit: async (accountId, problemId, request) => {
        const response = await axios.post<Submission>(`${BASE_URL}/api/accounts/${accountId}/problems/${problemId}/submissions`,request);
        return response;
    },

    getByAccountProblem: async (accountId, problemId) => {
        const response = await axios.get<GetSubmissionByAccountProblemResponse>(`${BASE_URL}/api/accounts/${accountId}/problems/${problemId}/submissions`);
        return response;
    }
}