import { ItemInterface } from "react-sortablejs";
import { PlateEditorValueType } from "../PlateEditorValueType";
import { CollectionPopulateCollectionProblemsPopulateProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupAndCollectionGroupPermissionsPopulateGroupModel } from "../models/Collection.model";
import { GroupModel } from "../models/Group.model";
import { ProblemPopulateTestcases } from "../models/Problem.model";
import { CollectionPermissionRequestForm } from "./CreateGroupRequestForm";
import { ProblemGroupPermissionRequestForm } from "./CreateProblemRequestForm";

export type CollectionGroupPermissionRequestForm = {
    group_id: string;
    group: GroupModel;
} & CollectionPermissionRequestForm

export type ProblemItemInterface = ItemInterface & {
    problem: ProblemPopulateTestcases;
    groupPermissions: ProblemGroupPermissionRequestForm[];
}

export type CreateCollectionRequestForm = {
    title: string;
    description: PlateEditorValueType;
    problemsInterface: ProblemItemInterface[];
    groupPermissions: CollectionGroupPermissionRequestForm[];
    collection: null | CollectionPopulateCollectionProblemsPopulateProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupAndCollectionGroupPermissionsPopulateGroupModel;
}