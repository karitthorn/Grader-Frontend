import { AxiosResponse } from "axios";
import { GetSubmissionByAccountProblemResponse, SubmissionModel, SubmissionPopulateProblemModel, SubmissionPopulateSubmissionTestcaseAndProblemSecureModel, SubmissionPopulateSubmissionTestcasesSecureModel, SubmissionTestcaseSecureModel } from "../models/Submission.model";
import { ProblemPopulateAccountSecureModel } from "../models/Problem.model";

export type SubmitProblemRequest = {
    language: string
    submission_code: string
}

export type SubmitProblemResponse = {
    submission_id: number
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
    problem_id?: number
    account_id?: number
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
    submit: (accountId:number,problemId:number,request: SubmitProblemRequest) => Promise<AxiosResponse<SubmissionPopulateSubmissionTestcasesSecureModel>>;
    topicSubmit: (accountId:number,topicId:number,problemId:number,request: SubmitProblemRequest) => Promise<AxiosResponse<SubmissionPopulateSubmissionTestcasesSecureModel>>;
    getByAccountProblem: (accountId:number,problemId:number) => Promise<AxiosResponse<GetSubmissionByAccountProblemResponse>>;
    getByAccountProblemInTopic: (accountId:number,problemId:number,topicId:number) => Promise<AxiosResponse<GetSubmissionByAccountProblemResponse>>;
    getAll: (query?:GetAllSubmissionsQuery) => Promise<AxiosResponse<GetAllSubmissionsResponse>>;
}