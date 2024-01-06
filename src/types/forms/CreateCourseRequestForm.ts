import { ItemInterface } from "react-sortablejs";
import { PlateEditorValueType } from "../PlateEditorValueType";
import { CoursePermissionRequestForm } from "./CreateGroupRequestForm";
import { GroupModel, TopicGroupPermissionPopulateGroupModel } from "../models/Group.model";
import { TopicPopulateTopicCollectionPopulateCollectionAndTopicGroupPermissionPopulateGroupModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemAndTopicGroupPermissionPopulateGroupModel } from "../models/Topic.model";

export type CourseGroupPermissionRequestForm = {
    group_id: string;
    group: GroupModel;
} & CoursePermissionRequestForm

export type CreateCourseRequestForm = {
    title: string;
    description: PlateEditorValueType;
    image?: File | string | null;
    isPrivate?: boolean;
    collectionsInterface: ItemInterface[];
    groupPermissions: CourseGroupPermissionRequestForm[];
    course: TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemAndTopicGroupPermissionPopulateGroupModel | TopicPopulateTopicCollectionPopulateCollectionAndTopicGroupPermissionPopulateGroupModel | null;
}
