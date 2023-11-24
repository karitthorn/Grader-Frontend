import { AccountModel } from "../models/Account";
import { AuthenticationResultResponse } from "../models/Auth";
import { ErrorResponse } from "./ErrorHandling";

export type LoginRequest = {
    username: string;
    password: string;
}

export type LogoutRequest = {
    account_id: number;
    token: string;
}

export type AuthorizationRequest = {
    account_id: number;
    token: string;
}

export type AuthServiceAPI = {
    login: (request: LoginRequest) => Promise<AccountModel | ErrorResponse>;
    logout: (request: LogoutRequest) => Promise<AuthenticationResultResponse>;
    authorize: (request: AuthorizationRequest) => Promise<AuthenticationResultResponse>;
}