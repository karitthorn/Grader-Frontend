import { AccountModel, AccountSecureModel } from "../models/Account";
import { ErrorResponse } from "./ErrorHandling";

export type AccountCreateRequest = {
    username: string;
    password: string;
    email: string;
}

export type AccountServiceAPI = {
    create: (request: AccountCreateRequest) => Promise<AccountModel | ErrorResponse>;
    getAll: () => Promise<AccountSecureModel[]>;
    get: (id:number) => Promise<AccountModel | ErrorResponse>;
}