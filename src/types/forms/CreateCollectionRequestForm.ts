import { ItemInterface } from "react-sortablejs";
import { CollectionProblemPopulateProblemSecureModel } from "../models/Collection.model";
import { PlateEditorValueType } from "../PlateEditorValueType";
import { GroupModel } from "../models/Group.model";
import { CollectionPermissionRequestForm } from "./CreateGroupRequestForm";

export type CollectionGroupPermissionRequestForm = {
    group_id: string;
    group: GroupModel;
} & CollectionPermissionRequestForm

export type CreateCollectionRequestForm = {
    title: string;
    description: PlateEditorValueType;
    problemsInterface: ItemInterface[];
    groupPermissions: CollectionGroupPermissionRequestForm[];
}