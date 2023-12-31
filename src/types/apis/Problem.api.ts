import { AxiosResponse } from "axios";
import { ErrorResponse } from "./ErrorHandling";
import { ProblemModel, ProblemPoplulateCreatorModel, ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel, ProblemPopulateTestcases } from "../models/Problem.model";

export type CreateProblemRequest = {
    title: string;
    language: string;
    description: string | null;
    solution: string;
    testcases: string[];
    time_limit: number;
}

export type UpdateProblemRequest = {
    title?: string;
    language?: string;
    description?: string;
    solution?: string;
    testcases?: string[];
    time_limit?: number;
}

export type GetAllProblemsByAccountResponse = {
    problems: ProblemPopulateTestcases[];
}

export type ValidateProgramRequest = {
    language: string;
    source_code: string;
    testcases: string[];
    time_limited: number;
}

export type RuntimeResult = {
    input: string;
    output: string | null;
    runtime_status: string;
}

export type ValidateProgramResponse = {
    runnable: boolean;
    has_error: boolean;
    has_timeout: boolean;
    runtime_results: RuntimeResult[];
}

export type GetAllProblemsResponse = {
    problems: ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[]
}

export type ProblemServiceAPI = {
    create: (accountId:string,request: CreateProblemRequest) => Promise<AxiosResponse<ProblemModel>>;
    getAll: () => Promise<AxiosResponse<GetAllProblemsResponse>>;
    getAllByAccount: (accountId:string) => Promise<AxiosResponse<GetAllProblemsByAccountResponse>>;
    get: (problemId:string) => Promise<AxiosResponse<ProblemPoplulateCreatorModel>>;
    update: (problemId:string, request: UpdateProblemRequest | CreateProblemRequest) => Promise<AxiosResponse<ProblemModel>>;
    // deleteMultiple: (problemIds:string[]) => Promise<AxiosResponse<null>>;
    delete: (problemId:string) => Promise<AxiosResponse<null>>;

    validateProgram: (request: ValidateProgramRequest) => Promise<AxiosResponse<ValidateProgramResponse>>;
}