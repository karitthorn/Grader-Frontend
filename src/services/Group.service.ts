import axios from "axios";
import { GroupSerivceAPI } from "../types/apis/Group.api";
import { BASE_URL } from "../constants/BackendBaseURL";

export const GroupService: GroupSerivceAPI = {
    get: async (groupId:number,query?:any) => {
        const response = await axios.get(`${BASE_URL}/api/groups/${groupId}`,{
            params: query
        })

        return response;
    },

    getAllByAccount: async (accountId:number,query?:any) => {
        const response = await axios.get(`${BASE_URL}/api/accounts/${accountId}/groups`,{
            params: query
        })

        return response;
    },

    create: async (accountId,request) => {
        const response = await axios.post(`${BASE_URL}/api/accounts/${accountId}/groups`,request)

        return response;
    },

    update: async (groupId,request) => {
        const response = await axios.put(`${BASE_URL}/api/groups/${groupId}`,request)

        return response;
    },

    delete: async (groupId) => {
        const response = await axios.delete(`${BASE_URL}/api/groups/${groupId}`)

        return response;
    },

    updateMembers: async (groupId,accountIds) => {
        const response = await axios.put(`${BASE_URL}/api/groups/${groupId}/members`,{
            account_ids: accountIds
        })

        return response;
    }
}