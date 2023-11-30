import { AxiosResponse } from "axios";
import { ErrorResponse } from "./ErrorHandling";
import { ProblemModel, ProblemPoplulateCreatorModel } from "../models/Problem.model";

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
    create: (accountId:number,request: CreateProblemRequest) => Promise<AxiosResponse<ProblemModel>>;
    getAll: (accountId:number) => Promise<AxiosResponse<{problems: ProblemPoplulateCreatorModel[]}>>;
    get: (problemId:number) => Promise<AxiosResponse<ProblemPoplulateCreatorModel>>;
    update: (problemId:number, request: UpdateProblemRequest) => Promise<AxiosResponse<ProblemModel>>;
    deleteMultiple: (problemIds:number[]) => Promise<AxiosResponse<null>>;
}