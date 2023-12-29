import { ItemInterface } from "react-sortablejs";
import { AccountHashedTable, AccountModel, AccountSecureModel } from "../models/Account.model";

export function transformAccounts2ReactSortableItemInterfaces(accounts: AccountModel[] | AccountSecureModel[]): ItemInterface[] {
    return accounts.map(account => (
        {
            id: account.account_id,
            content: account.username
        }
    ))
}

export function transformAccountModels2AccountHashedTable(accounts: AccountModel[] | AccountSecureModel[]): AccountHashedTable {
    let result = []
    for (const account of accounts) {
        result[account.account_id] = account
    }
    return result
}