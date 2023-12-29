export type AccountModel = {
    account_id: number
    email: string
    username: string
    password: string
    token: string | null
    token_expire: string | null
    is_active: boolean
    is_private: boolean
}

export type AccountSecureModel = {
    account_id: number
    username: string
}

export type AccountHashedTable = {
    [id:number]: AccountModel | AccountSecureModel
}