import { ItemInterface } from "react-sortablejs";
import { AccountSecureModel } from "../models/Account.model";

export type CoursePermissionRequestForm = {
    manageCourses: boolean;
    viewCourseLogs: boolean;
    viewCourses: boolean;
}

export type CollectionPermissionRequestForm = {
    manageCollections: boolean;
    viewCollections: boolean;
}

export type ProblemPermissionRequestForm = {
    manageProblems: boolean;
    viewProblems: boolean;
}

export type CreateGroupRequestForm = {
    name: string;
    description: string | null;
    color: string | null;
    membersInterface: ItemInterface[];
} & CoursePermissionRequestForm & CollectionPermissionRequestForm & ProblemPermissionRequestForm