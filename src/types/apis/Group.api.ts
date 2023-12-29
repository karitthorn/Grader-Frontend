import { AxiosResponse } from "axios";
import { GroupModel, GroupPopulateGroupMemberPopulateAccountSecureModel } from "../models/Group.model";

export type GroupCreateRequest = {
    name: string;
    description?: string | null;
    color?: string | null;
}

export type GroupGetAllByAccountResponse = {
    groups: GroupModel[] | GroupPopulateGroupMemberPopulateAccountSecureModel[];
}

export type GroupGetQuery = {
    populate_members?: boolean;
}

export type GroupSerivceAPI = {
    get: (groupId:number,query?:GroupGetQuery) => Promise<AxiosResponse<GroupModel | GroupPopulateGroupMemberPopulateAccountSecureModel>>;
    getAllByAccount: (accountId:number,query?:GroupGetQuery) => Promise<AxiosResponse<GroupGetAllByAccountResponse>>;
    create: (accountId:number,request:GroupCreateRequest) => Promise<AxiosResponse<GroupModel>>;
    update: (groupId:number,request:GroupCreateRequest) => Promise<AxiosResponse<GroupModel>>;
    delete: (groupId:number) => Promise<AxiosResponse<null>>;
    updateMembers: (groupId:number,accountIds:number[]) => Promise<AxiosResponse<GroupPopulateGroupMemberPopulateAccountSecureModel>>;
}