import axios from "axios";
import { GetAllTopicsByAccountResponse, TopicSerivceAPI } from "../types/apis/Topic.api";
import { BASE_URL } from "../constants/BackendBaseURL";

export const TopicService: TopicSerivceAPI = {
    getAllByAccount: async (accountId) => {
        const response = await axios.get<GetAllTopicsByAccountResponse>(`${BASE_URL}/api/accounts/${accountId}/topics`);
        return response;
    }
}