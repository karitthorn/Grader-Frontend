export type Account = {
    account_id: number
    email: string
    username: string
    password: string
    token: string | null
    token_expire: string | null
}