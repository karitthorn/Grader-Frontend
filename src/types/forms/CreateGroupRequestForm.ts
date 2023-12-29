import { ItemInterface } from "react-sortablejs";
import { AccountSecureModel } from "../models/Account.model";

export type CreateGroupRequestForm = {
    name: string;
    description: string | null;
    color: string | null;
    membersInterface: ItemInterface[];
}