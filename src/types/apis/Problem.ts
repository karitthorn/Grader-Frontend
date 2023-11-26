import { Problem } from "../models/Problem";
import { ErrorResponse } from "./ErrorHandling";

export type CreateProblemRequest = {
    title: string;
    language: string;
    description?: string;
    solution: string;
    testcases: string[];
    time_limit: number;
}

export type ProblemServiceAPI = {
    create: (request: CreateProblemRequest) => Promise<Problem | ErrorResponse>;
    account: (accountId:number) => Promise<Problem[] | ErrorResponse>;
} 