import { AxiosResponse } from "axios";
import { TopicModel, TopicPopulateTopicCollectionPopulateCollectionModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../models/Topic.model";

export type GetAllTopicsByAccountResponse = {
    topics: TopicPopulateTopicCollectionPopulateCollectionModel[];
}

export type GetAllTopicsByAccessibleAccountResponse = {
    topics: TopicModel[];
}

export type TopicSerivceAPI = {
    create: (accountid: string,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    get: (accountid: string,courseId:string) => Promise<AxiosResponse<TopicPopulateTopicCollectionPopulateCollectionModel>>;
    getAllAsCreator: (accountId:string) => Promise<AxiosResponse<GetAllTopicsByAccountResponse>>;
    getAllAccessibleByAccount: (accountId:string) => Promise<AxiosResponse<GetAllTopicsByAccessibleAccountResponse>>;
    getPublicByAccount: (accountId:string,courseId:string) => Promise<AxiosResponse<TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel>>;
    update: (courseId:string,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    updateCollections: (topicId:string,collectionIds:string[]) => Promise<AxiosResponse<TopicModel>>;
}