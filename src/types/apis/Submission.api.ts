import { AxiosResponse } from "axios";
import { GetSubmissionByAccountProblemResponse, SubmissionModel, SubmissionPopulateProblemModel, SubmissionPopulateSubmissionTestcaseAndProblemSecureModel, SubmissionPopulateSubmissionTestcasesSecureModel, SubmissionTestcaseSecureModel } from "../models/Submission.model";
import { ProblemPopulateAccountSecureModel } from "../models/Problem.model";

export type SubmitProblemRequest = {
    language: string
    submission_code: string
}

export type SubmitProblemResponse = {
    submission_id: string
    problem: ProblemPopulateAccountSecureModel
    language: string
    submission_code: string
    is_passed: boolean
    date: string
    score: number
    max_score: number
    passed_ratio: number
    account: number
    runtime_output: SubmissionTestcaseSecureModel[]
}

export type GetAllSubmissionsQuery = {
    problem_id?: string
    account_id?: string
    passed?: number
    sort_date?: number
    sort_score?: number
    start?: number
    end?: number
}

export type GetAllSubmissionsResponse = {
    submissions: SubmissionPopulateSubmissionTestcaseAndProblemSecureModel[]
}

export type SubmissionServiceAPI = {
    submit: (accountId:string,problemId:string,request: SubmitProblemRequest) => Promise<AxiosResponse<SubmissionPopulateSubmissionTestcasesSecureModel>>;
    topicSubmit: (accountId:string,topicId:string,problemId:string,request: SubmitProblemRequest) => Promise<AxiosResponse<SubmissionPopulateSubmissionTestcasesSecureModel>>;
    getByAccountProblem: (accountId:string,problemId:string) => Promise<AxiosResponse<GetSubmissionByAccountProblemResponse>>;
    getByAccountProblemInTopic: (accountId:string,problemId:string,topicId:string) => Promise<AxiosResponse<GetSubmissionByAccountProblemResponse>>;
    getAll: (query?:GetAllSubmissionsQuery) => Promise<AxiosResponse<GetAllSubmissionsResponse>>;
}