import { AxiosResponse } from "axios";
import { GroupModel, GroupPopulateGroupMemberPopulateAccountSecureModel } from "../models/Group.model";

export type GroupCreateRequest = {
    name: string;
    description?: string | null;
    color?: string | null;
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