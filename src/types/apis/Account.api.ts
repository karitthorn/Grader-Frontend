import { AxiosResponse } from "axios";
import { AccountModel, AccountSecureModel } from "../models/Account.model";

export type AccountCreateRequest = {
    username: string;
    password: string;
    email: string;
}

export type AccountServiceAPI = {
    create: (request: AccountCreateRequest) => Promise<AxiosResponse<AccountModel>>;
    getAll: () => Promise<AxiosResponse<{accounts: AccountSecureModel[]}>>;
    get: (accountId:string) => Promise<AxiosResponse<AccountModel>>;
}