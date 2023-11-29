import { AxiosResponse } from "axios";
import { Problem, ProblemPoplulateCreator } from "../models/Problem";
import { ErrorResponse } from "./ErrorHandling";

export type CreateProblemRequest = {
    title: string;
    language: string;
    description?: string;
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

export type ProblemServiceAPI = {
    create: (accountId:number,request: CreateProblemRequest) => Promise<AxiosResponse<Problem | ErrorResponse>>;
    getAll: (accountId:number) => Promise<AxiosResponse<{problems: ProblemPoplulateCreator[]} | ErrorResponse>>;
    get: (problemId:number) => Promise<AxiosResponse<ProblemPoplulateCreator>>;
    update: (problemId:number, request: UpdateProblemRequest) => Promise<AxiosResponse<Problem | ErrorResponse>>;
    deleteMultiple: (problemIds:number[]) => Promise<AxiosResponse<null | ErrorResponse>>;
}