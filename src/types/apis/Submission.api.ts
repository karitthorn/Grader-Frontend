import { AxiosResponse } from "axios";
import { GetSubmissionByAccountProblemResponse, SubmissionModel, SubmissionPopulateSubmissionTestcasesSecureModel, SubmissionTestcaseSecureModel } from "../models/Submission.model";
import { ProblemPopulateAccountSecureModel } from "../models/Problem.model";

export type SubmitProblemRequest = {
    language: string
    submission_code: string
}

export type SubmitProblemResponse = {
    submission_id: number
    problem: ProblemPopulateAccountSecureModel
    submission_code: string
    is_passed: boolean
    date: string
    score: number
    max_score: number
    passed_ratio: number
    account: number
    runtime_output: SubmissionTestcaseSecureModel[]
}

export type SubmissionServiceAPI = {
    submit: (accountId:number,problemId:number,request: SubmitProblemRequest) => Promise<AxiosResponse<SubmissionPopulateSubmissionTestcasesSecureModel>>;
    getByAccountProblem: (accountId:number,problemId:number) => Promise<AxiosResponse<GetSubmissionByAccountProblemResponse>>;
}