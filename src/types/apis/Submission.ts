import { AxiosResponse } from "axios";
import { GetSubmissionByAccountProblemResponse, Submission } from "../models/Submission";

export type SubmitProblemRequest = {
    submission_code: string
}

export type SubmissionServiceAPI = {
    submit: (accountId:number,problemId:number,request: SubmitProblemRequest) => Promise<AxiosResponse<Submission>>;
    getByAccountProblem: (accountId:number,problemId:number) => Promise<AxiosResponse<GetSubmissionByAccountProblemResponse>>;
}