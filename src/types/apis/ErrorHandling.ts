export type ErrorResponseType = {
    DUPLICATED_USERNAME: "UNIQUE constraint failed: api_account.username";
    DUPLICATED_EMAIL: "UNIQUE constraint failed: api_account.email";
    [key: string]: string;
}

export type ErrorResponse = {
    message: ErrorResponseType | string;
}

