import { ProblemSecure } from "./Problem";

export type SubmissionTestcaseSecure = {
	is_passed: boolean;
	runtime_status: string;
};

export type Submission = {
	submission_id: number;
	problem: ProblemSecure;
	submission_code: string;
	is_passed: boolean;
	date: string;
	score: number;
	max_score: number;
	passed_ratio: number;
	account: number;
	runtime_output: SubmissionTestcaseSecure[];
};

export type GetSubmissionByAccountProblemSubmission = {
    submission_id: number
    submission_code: string
    is_passed: boolean
    date: string
    score: number
    max_score: number
    passed_ratio: number
    problem: number
    account: number
    runtime_output: SubmissionTestcaseSecure[]
}

export type GetSubmissionByAccountProblemResponse = {
    best_submission: GetSubmissionByAccountProblemSubmission
    submissions: GetSubmissionByAccountProblemSubmission[]
}