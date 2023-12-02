import { AccountSecureModel } from "./Account.model"

export type TestcaseModel = {
    testcase_id: number
    input: string
    output: string
    problem: number
    runtime_status: string
}

export type ProblemModel = {
    problem_id: number
    language: string
    title: string
    description: string | null
    solution: string
    time_limit: number
    is_active: boolean
    is_private: boolean
    submission_regex: string
    creator: number
    testcases: TestcaseModel[]
    created_date: string;
    updated_date: string;
}

export type ProblemSecureModel = {
    problem_id: number
    title: string
    description: string
    creator: AccountSecureModel
}

export type ProblemPoplulateCreatorModel = {
    problem_id: number
    language: string
    title: string
    description: string
    solution: string
    time_limit: number
    is_active: boolean
    is_private: boolean
    submission_regex: string
    creator: AccountSecureModel
    testcases: TestcaseModel[]
}

export type ProblemPopulateAccountSecureModel = {
    problem_id: number
    title: string
    description: string | null
    creator: AccountSecureModel
}