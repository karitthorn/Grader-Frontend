import { AxiosResponse } from "axios";
import { ErrorResponse } from "./ErrorHandling";
import { ProblemModel, ProblemPoplulateCreatorModel } from "../models/Problem.model";

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
    problems: ProblemModel[];
}

export type ValidateProgramRequest = {
    language: string;
    source_code: string;
    testcases: string[];
    time_limited: number;
}

export type RuntimeResult = {
    input: string;
    output: string;
    runtime_status: string;
}

export type ValidateProgramResponse = {
    runnable: boolean;
    has_error: boolean;
    has_timeout: boolean;
    runtime_results: RuntimeResult[];
}

export type ProblemServiceAPI = {
    create: (accountId:number,request: CreateProblemRequest) => Promise<AxiosResponse<ProblemModel>>;
    getAll: (accountId:number) => Promise<AxiosResponse<{problems: ProblemPoplulateCreatorModel[]}>>;
    getAllByAccount: (accountId:number) => Promise<AxiosResponse<GetAllProblemsByAccountResponse>>;
    get: (problemId:number) => Promise<AxiosResponse<ProblemPoplulateCreatorModel>>;
    update: (problemId:number, request: UpdateProblemRequest) => Promise<AxiosResponse<ProblemModel>>;
    deleteMultiple: (problemIds:number[]) => Promise<AxiosResponse<null>>;

    validateProgram: (request: ValidateProgramRequest) => Promise<AxiosResponse<ValidateProgramResponse>>;
}