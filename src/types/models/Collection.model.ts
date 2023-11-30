import { ProblemModel } from "./Problem.model";

export type CollectionModel = {
    collection_id: number;
    creator: number;
    name: string;
    description: string | null;
    is_active: boolean;
    is_private: boolean;
}

export type CollectionProblemModel = {
    collection: CollectionModel;
    problem: ProblemModel[];
}