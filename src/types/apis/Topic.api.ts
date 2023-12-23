import { AxiosResponse } from "axios";
import { TopicModel, TopicPopulateTopicCollectionPopulateCollectionModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../models/Topic.model";

export type GetAllTopicsByAccountResponse = {
    topics: TopicPopulateTopicCollectionPopulateCollectionModel[];
}

export type TopicSerivceAPI = {
    create: (accountId: number,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    get: (accountId: number,courseId:number) => Promise<AxiosResponse<TopicPopulateTopicCollectionPopulateCollectionModel>>;
    update: (courseId:number,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    getAllByAccount: (accountId:number) => Promise<AxiosResponse<GetAllTopicsByAccountResponse>>;
    updateCollections: (topicId:number,collectionIds:number[]) => Promise<AxiosResponse<TopicModel>>;
    getPublicByAccount: (accountId:number,courseId:number) => Promise<AxiosResponse<TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel>>;
}