import { AxiosResponse } from "axios";
import { TopicModel, TopicPopulateTopicCollectionPopulateCollectionModel } from "../models/Topic.model";

export type GetAllTopicsByAccountResponse = {
    topics: TopicPopulateTopicCollectionPopulateCollectionModel[];
}

export type TopicSerivceAPI = {
    create: (accountId: number,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    get: (courseId:number) => Promise<AxiosResponse<TopicModel>>;
    getAllByAccount: (accountId:number) => Promise<AxiosResponse<GetAllTopicsByAccountResponse>>;
    updateCollections: (topicId:number,collectionIds:number[]) => Promise<AxiosResponse<TopicModel>>;

}