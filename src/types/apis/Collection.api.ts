import { AxiosResponse } from "axios"
import { CollectionCreateRequest, CollectionModel, CollectionPopulateCollectionProblemPopulateProblemModel, CollectionPopulateProblemSecureModel, CollectionProblemModel, CollectionUpdateRequest } from "../models/Collection.model"

export type GetCollectionByAccountResponse = {
    collections: CollectionPopulateCollectionProblemPopulateProblemModel[];
}

export type CollectionServiceAPI = {
    create: (accountId:string,request:CollectionCreateRequest) => Promise<AxiosResponse<CollectionModel>>;
    get: (collectionId:string) => Promise<AxiosResponse<CollectionProblemModel>>;
    getAllAsCreator: (accountId:string) => Promise<AxiosResponse<GetCollectionByAccountResponse>>;
    update: (collectionId:string,request:CollectionUpdateRequest) => Promise<AxiosResponse<CollectionModel>>;
    addProblem: (collectionId:string,problemIds:string[]) => Promise<AxiosResponse<CollectionModel>>;
    removeProblem: (collectionId:string,problemIds:string[]) => Promise<AxiosResponse<null>>;
    updateProblem: (collectionId:string,problemIds:string[]) => Promise<AxiosResponse<CollectionModel>>;
}