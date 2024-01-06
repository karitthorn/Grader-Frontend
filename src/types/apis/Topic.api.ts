import { AxiosResponse } from "axios";
import { TopicModel, TopicPopulateTopicCollectionPopulateCollectionAndTopicGroupPermissionPopulateGroupModel, TopicPopulateTopicCollectionPopulateCollectionModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemAndTopicGroupPermissionPopulateGroupModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../models/Topic.model";

export type GetAllTopicsByAccountResponse = {
    topics: TopicPopulateTopicCollectionPopulateCollectionModel[];
    manageable_topics: TopicPopulateTopicCollectionPopulateCollectionModel[];
}

export type GetAllTopicsByAccessibleAccountResponse = {
    topics: TopicModel[];
}

export type CourseGroupPermissionCreateRequest = {
    group_id: string;
    permission_manage_topics?: boolean
    permission_view_topics?: boolean
    permission_view_topics_log?: boolean
}

export type TopicSerivceAPI = {
    create: (accountid: string,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    get: (accountid: string,courseId:string) => Promise<AxiosResponse<TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemAndTopicGroupPermissionPopulateGroupModel>>;
    getAllAsCreator: (accountId:string) => Promise<AxiosResponse<GetAllTopicsByAccountResponse>>;
    getAllAccessibleByAccount: (accountId:string) => Promise<AxiosResponse<GetAllTopicsByAccessibleAccountResponse>>;
    getPublicByAccount: (accountId:string,courseId:string) => Promise<AxiosResponse<TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel>>;
    update: (courseId:string,accountId:string,request: FormData) => Promise<AxiosResponse<TopicModel>>;
    updateCollections: (topicId:string,collectionIds:string[]) => Promise<AxiosResponse<TopicModel>>;
    updateGroupPermissions: (topicId:string,accountId:string,groups:CourseGroupPermissionCreateRequest[]) => Promise<AxiosResponse<TopicModel>>;
}