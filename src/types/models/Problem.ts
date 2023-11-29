import { AccountSecureModel } from "./Account"

export type Testcase = {
    testcase_id: number
    input: string
    output: string
    problem: number
}

export type Problem = {
    problem_id: number
    language: string
    title: string
    description: string
    solution: string
    time_limit: number
    is_active: boolean
    is_private: boolean
    submission_regex: string
    creator: number
    testcases: Testcase[]
}

export type ProblemSecure = {
    problem_id: number
    title: string
    description: string
    creator: AccountSecureModel
}

export type ProblemPoplulateCreator = {
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
    testcases: Testcase[]
}