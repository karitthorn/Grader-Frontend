import { ProblemModel, ProblemSecureModel } from "./Problem.model";

export type CollectionModel = {
    collection_id: number;
    creator: number;
    name: string;
    description: string | null;
    is_active: boolean;
    is_private: boolean;
    created_date: string;
    updated_date: string;
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

export type CollectionProblemPopulateProblemSecureModel = {
    id: number;
    problem: ProblemSecureModel;
    order: number;
    collection: number;
}

export type GetCollectionByAccountResponse = {
    collections: CollectionProblemModel[];
}