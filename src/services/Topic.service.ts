import axios from "axios";
import { GetAllTopicsByAccountResponse, TopicSerivceAPI } from "../types/apis/Topic.api";
import { BASE_URL } from "../constants/BackendBaseURL";
import { TopicModel } from "../types/models/Topic.model";

export const TopicService: TopicSerivceAPI = {
    create: async (accountId, request) => {
        const response = await axios.post<TopicModel>(`${BASE_URL}/api/accounts/${accountId}/topics`, request);
        return response;
    },

    getAllByAccount: async (accountId) => {
        const response = await axios.get<GetAllTopicsByAccountResponse>(`${BASE_URL}/api/accounts/${accountId}/topics`);
        return response;
    },

    updateCollections: async (topicId, collectionIds) => {
        const response = await axios.put<TopicModel>(`${BASE_URL}/api/topics/${topicId}/collections/update`, {
            collection_ids: collectionIds
        });
        return response;
    }
}