import { AccountSecureModel } from "./Account.model";

export type GroupModel = {
    group_id: string;
    creator: number;
    name: string;
    description: string | null;
    color: string;
    created_date: string;
    updated_date: string;
}

export type GroupMemberModel = {
    group_member_id: string;
    group: number;
    account: number;
    created_date: string;
}  

export type GroupMemberPopulateAccountSecureModel = GroupMemberModel & {
    account: AccountSecureModel;
}

export type GroupPopulateGroupMemberPopulateAccountSecureModel = GroupModel & {
    members: GroupMemberPopulateAccountSecureModel[]
}

export type GroupHashedTable = {
    [id:string]: GroupModel | GroupPopulateGroupMemberPopulateAccountSecureModel
}