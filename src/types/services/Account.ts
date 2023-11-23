export type AccountCreateRequest = {
    username: string;
    password: string;
    email: string;
}

export type AccountCreateResponse = {
    username: string;
    email: string;
}