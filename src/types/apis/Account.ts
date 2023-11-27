import { AxiosResponse } from "axios";
import { AccountModel, AccountSecureModel } from "../models/Account";
import { ErrorResponse } from "./ErrorHandling";

export type AccountCreateRequest = {
    username: string;
    password: string;
    email: string;
}

export type AccountServiceAPI = {
    create: (request: AccountCreateRequest) => Promise<AxiosResponse<AccountModel>>;
    getAll: () => Promise<AxiosResponse<AccountModel[]>>;
    get: (accountId:number) => Promise<AxiosResponse<AccountModel>>;
}