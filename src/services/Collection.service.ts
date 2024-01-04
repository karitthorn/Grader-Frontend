import axios from "axios";
import { CollectionServiceAPI, GetCollectionByAccountResponse } from "../types/apis/Collection.api";
import { CollectionModel, CollectionPopulateProblemSecureModel, CollectionProblemModel } from "../types/models/Collection.model";
import { BASE_URL } from "../constants/BackendBaseURL";

export const CollectionService: CollectionServiceAPI = {
    create: (accountId,request) => {
        return axios.post<CollectionModel>(`${BASE_URL}/api/accounts/${accountId}/collections`,request);
    },

    get: (collectionId) => {
        return axios.get<CollectionProblemModel>(`${BASE_URL}/api/collections/${collectionId}`);
    },

    getAllAsCreator: (accountId) => {
        return axios.get<GetCollectionByAccountResponse>(`${BASE_URL}/api/accounts/${accountId}/collections`);
    },

    update: (collectionId,request) => {
        return axios.put<CollectionModel>(`${BASE_URL}/api/collections/${collectionId}`,request);
    },

    addProblem: (collectionId,problemIds) => {
        return axios.put<CollectionModel>(`${BASE_URL}/api/collections/${collectionId}/problems/add`,{problemIds});
    },

    removeProblem: (collectionId,problemIds) => {
        return axios.put(`${BASE_URL}/api/collections/${collectionId}/problems/remove`,{data:{problemIds}});
    },

    updateProblem: (collectionId,problemIds) => {
        return axios.put<CollectionModel>(`${BASE_URL}/api/collections/${collectionId}/problems/update`,{problem_ids: problemIds});
    },
    
}