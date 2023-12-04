import { ProblemModel } from "./Problem.model";

export type SubmissionTestcaseModel = {
    submission_testcase_id: number;
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
	submission_id: number;
	problem: number;
	submission_code: string;
	is_passed: boolean;
	date: string;
	score: number;
	max_score: number;
	passed_ratio: number;
	account: number;
};

export type SubmissionPopulateProblemModel = {
    submission_id: number;
    problem: ProblemModel;
    submission_code: string;
    is_passed: boolean;
    date: string;
    score: number;
    max_score: number;
    passed_ratio: number;
    account: number;
    runtime_output: SubmissionTestcaseSecureModel[];
}

export type SubmissionPoplulateProblemSecureModel = {
    submission_id: number;
	problem: ProblemModel;
	submission_code: string;
	is_passed: boolean;
	date: string;
	score: number;
	max_score: number;
	passed_ratio: number;
	account: number;
}

export type SubmissionPopulateSubmissionTestcaseSecureSerializer = {
    // Will implement later
}

export type GetSubmissionByAccountProblemSubmissionModel = {
    submission_id: number
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

export type GetSubmissionByAccountProblemResponse = {
    best_submission: SubmissionPopulateSubmissionTestcasesSecureModel
    submissions: SubmissionPopulateSubmissionTestcasesSecureModel[]
}

export type SubmissionPopulateSubmissionTestcasesSecureModel = {
    submission_id: number
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