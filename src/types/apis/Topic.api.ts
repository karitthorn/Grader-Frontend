import { AxiosResponse } from "axios";
import { TopicPopulateTopicCollectionPopulateCollectionModel } from "../models/Topic.model";

export type GetAllTopicsByAccountResponse = {
    topics: TopicPopulateTopicCollectionPopulateCollectionModel[];
}

export type TopicSerivceAPI = {
    getAllByAccount: (accountId:number) => Promise<AxiosResponse<GetAllTopicsByAccountResponse>>;
}