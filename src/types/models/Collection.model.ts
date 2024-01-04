import { ProblemModel, ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel, ProblemSecureModel } from "./Problem.model";

export type CollectionModel = {
    collection_id: string;
    creator: string;
    name: string;
    description: string | null;
    is_active: boolean;
    is_private: boolean;
    created_date: string;
    updated_date: string;
}

export type CollectionPopulateProblemSecureModel = CollectionModel & {
    problems: ProblemSecureModel[];
}

export type CollectionProblemModel = CollectionModel & {
    problems: CollectionProblemPopulateProblemSecureModel[];
}

export type CollectionCreateRequest = {
    name: string;
    description?: string;
}

export type CollectionUpdateRequest = {
    name?: string;
    description?: string;
}

export type CollectionProblemPopulateProblemModel = {
    id: string;
    problem: ProblemModel;
    order: number;
    collection: number;
}

export type CollectionProblemPopulateProblemSecureModel = {
    id: string;
    problem: ProblemSecureModel;
    order: number;
    collection: number;
}



export type CollectionHashedTable = {
    [collection_id:string]: CollectionPopulateCollectionProblemPopulateProblemModel
}

export type CollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel = {
    id: string;
    problem: ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel;
    order: number;
    collection: number;
}

export type CollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel = CollectionModel & {
    problems: CollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[]
}


export type CollectionPopulateCollectionProblemPopulateProblemModel = CollectionModel & {
    problems: CollectionProblemPopulateProblemModel[];
}