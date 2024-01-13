import { AxiosResponse } from "axios";
import { GroupModel, GroupPopulateGroupMemberPopulateAccountSecureModel } from "../models/Group.model";

export type GroupCreateRequest = {
    name: string;
    description?: string | null;
    color?: string | null;
    permission_manage_topics?: boolean
    permission_view_topics?: boolean
    permission_view_topics_log?: boolean
    permission_manage_collections?: boolean
    permission_view_collections?: boolean
    permission_manage_problems?: boolean
    permission_view_problems?: boolean
}

export type GroupgetAllAsCreatorResponse = {
    groups: GroupModel[] | GroupPopulateGroupMemberPopulateAccountSecureModel[];
}

export type GroupGetQuery = {
    populate_members?: boolean;
}

export type GroupSerivceAPI = {
    get: (groupId:string,query?:GroupGetQuery) => Promise<AxiosResponse<GroupModel | GroupPopulateGroupMemberPopulateAccountSecureModel>>;
    getAllAsCreator: (accountId:string,query?:GroupGetQuery) => Promise<AxiosResponse<GroupgetAllAsCreatorResponse>>;
    create: (accountId:string,request:GroupCreateRequest) => Promise<AxiosResponse<GroupModel>>;
    update: (groupId:string,request:GroupCreateRequest) => Promise<AxiosResponse<GroupModel>>;
    delete: (groupId:string) => Promise<AxiosResponse<null>>;
    updateMembers: (groupId:string,accountIds:string[]) => Promise<AxiosResponse<GroupPopulateGroupMemberPopulateAccountSecureModel>>;
}