import { AxiosResponse } from "axios";
import { TopicModel, TopicPopulateTopicCollectionPopulateCollectionModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../models/Topic.model";

export type GetAllTopicsByAccountResponse = {
    topics: TopicPopulateTopicCollectionPopulateCollectionModel[];
}

export type TopicSerivceAPI = {
    create: (accountid: string,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    get: (accountid: string,courseId:string) => Promise<AxiosResponse<TopicPopulateTopicCollectionPopulateCollectionModel>>;
    update: (courseId:string,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    getAllByAccount: (accountId:string) => Promise<AxiosResponse<GetAllTopicsByAccountResponse>>;
    updateCollections: (topicId:string,collectionIds:string[]) => Promise<AxiosResponse<TopicModel>>;
    getPublicByAccount: (accountId:string,courseId:string) => Promise<AxiosResponse<TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel>>;
}