import { ProblemModel, ProblemSecureModel } from "./Problem.model";

export type SubmissionTestcaseModel = {
    submission_testcase_id: string;
    submission: number;
    testcase: number;
    output: string;
    is_passed: boolean;
    runtime_status: string;
}

export type SubmissionTestcaseSecureModel = {
	is_passed: boolean;
	runtime_status: string;
};

export type SubmissionModel = {
	submission_id: string;
	problem: number;
    topic: number | null;
    language: string;
	submission_code: string;
	is_passed: boolean;
	date: string;
	score: number;
	max_score: number;
	passed_ratio: number;
	account: number;
};

export type SubmissionPopulateProblemModel = {
    submission_id: string;
    account: number;
    problem: ProblemModel;
    language:  string;
    submission_code: string;
    is_passed: boolean;
    date: string;
    score: number;
    max_score: number;
    passed_ratio: number;
    runtime_output: SubmissionTestcaseSecureModel[];
}

export type SubmissionPoplulateProblemSecureModel = {
    submission_id: string;
	problem: ProblemModel;
	submission_code: string;
	is_passed: boolean;
	date: string;
	score: number;
	max_score: number;
	passed_ratio: number;
	account: number;
}

export type SubmissionPopulateSubmissionTestcaseSecureModel = {
    submission_id: string
    problem: number
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

export type GetSubmissionByAccountProblemSubmissionModel = {
    submission_id: string
    problem: string
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

export type GetSubmissionByAccountProblemResponse = {
    best_submission: SubmissionPopulateSubmissionTestcasesSecureModel
    submissions: SubmissionPopulateSubmissionTestcasesSecureModel[]
}

export type SubmissionPopulateSubmissionTestcasesSecureModel = {
    submission_id: string
    problem: number
    language: string
    submission_code: string
    is_passed: boolean
    date: string
    score: number
    max_score: number
    passed_ratio: number
    runtime_output: SubmissionTestcaseSecureModel[]
}

export type SubmissionPopulateSubmissionTestcaseAndProblemSecureModel = SubmissionModel & {
    problem: ProblemSecureModel;
    runtime_output: SubmissionTestcaseSecureModel[];
}