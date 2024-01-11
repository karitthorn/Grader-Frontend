import { ItemInterface } from "react-sortablejs";
import { CollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupModel, CollectionPopulateCollectionProblemsPopulateProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupAndCollectionGroupPermissionsPopulateGroupModel, CollectionProblemPopulateProblemSecureModel } from "../models/Collection.model";
import { PlateEditorValueType } from "../PlateEditorValueType";
import { GroupModel } from "../models/Group.model";
import { CollectionPermissionRequestForm } from "./CreateGroupRequestForm";
import { ProblemGroupPermissionRequestForm } from "./CreateProblemRequestForm";
import { ProblemPopulateTestcases } from "../models/Problem.model";

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