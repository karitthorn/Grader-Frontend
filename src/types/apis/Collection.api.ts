import { AxiosResponse } from "axios"
import { CollectionCreateRequest, CollectionModel, CollectionPopulateCollectionProblemPopulateProblemModel, CollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupModel, CollectionPopulateProblemSecureModel, CollectionProblemModel, CollectionUpdateRequest } from "../models/Collection.model"

export type GetCollectionByAccountResponse = {
    collections: CollectionPopulateCollectionProblemPopulateProblemModel[];
}

export type CollectionGroupPermissionCreateRequest = {
    group_id: string;
    permission_manage_collections?: boolean
    permission_view_collections?: boolean
}

export type CollectionServiceAPI = {
    create: (accountId:string,request:CollectionCreateRequest) => Promise<AxiosResponse<CollectionModel>>;
    get: (collectionId:string,accountId:string) => Promise<AxiosResponse<CollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupModel>>;
    getAllAsCreator: (accountId:string) => Promise<AxiosResponse<GetCollectionByAccountResponse>>;
    update: (collectionId:string,request:CollectionUpdateRequest) => Promise<AxiosResponse<CollectionModel>>;
    addProblem: (collectionId:string,problemIds:string[]) => Promise<AxiosResponse<CollectionModel>>;
    removeProblem: (collectionId:string,problemIds:string[]) => Promise<AxiosResponse<null>>;
    updateProblem: (collectionId:string,problemIds:string[]) => Promise<AxiosResponse<CollectionModel>>;
    updateGroupPermissions: (collectionId:string,accountId:string,groups:CollectionGroupPermissionCreateRequest[]) => Promise<AxiosResponse<CollectionModel>>;
}