import { ErrorResponseType } from "../types/apis/ErrorHandling";

export const ErrorResponseTypes = {
    DUPLICATED_USERNAME: "UNIQUE constraint failed: api_account.username",
    DUPLICATED_EMAIL: "UNIQUE constraint failed: api_account.email",
}