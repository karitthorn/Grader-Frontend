import { AxiosResponse } from "axios"
import { CollectionCreateRequest, CollectionModel, CollectionUpdateRequest, GetCollectionByAccountResponse } from "../models/Collection.model"

export type CollectionServiceAPI = {
    create: (accountId:number,request:CollectionCreateRequest) => Promise<AxiosResponse<CollectionModel>>;
    get: (collectionId:number) => Promise<AxiosResponse<CollectionModel>>;
    getAllByAccount: (accountId:number) => Promise<AxiosResponse<GetCollectionByAccountResponse>>;
    update: (collectionId:number,request:CollectionUpdateRequest) => Promise<AxiosResponse<CollectionModel>>;
    addProblem: (collectionId:number,problemIds:number[]) => Promise<AxiosResponse<CollectionModel>>;
    removeProblem: (collectionId:number,problemIds:number[]) => Promise<AxiosResponse<null>>;
}