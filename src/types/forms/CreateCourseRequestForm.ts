import { ItemInterface } from "react-sortablejs";
import { PlateEditorValueType } from "../PlateEditorValueType";
import { CoursePermissionRequestForm } from "./CreateGroupRequestForm";
import { GroupModel, TopicGroupPermissionPopulateGroupModel } from "../models/Group.model";
import { TopicPopulateTopicCollectionPopulateCollectionAndTopicGroupPermissionPopulateGroupModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemAndTopicGroupPermissionPopulateGroupModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupAndTopicGroupPermissionPopulateGroupModel } from "../models/Topic.model";
import { CollectionGroupPermissionRequestForm } from "./CreateCollectionRequestForm";
import { CollectionModel, CollectionPopulateCollectionProblemPopulateProblemModel, CollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupModel } from "../models/Collection.model";

export type CourseGroupPermissionRequestForm = {
    group_id: string;
    group: GroupModel;
} & CoursePermissionRequestForm

export type CourseCollectionsGroupPermissionRequestForm = {
    collection_id: string;
    collection: CollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupModel;
    groupPermissions: CollectionGroupPermissionRequestForm[];
}

export type CollectionItemInterface = ItemInterface & {
    collection: CollectionPopulateCollectionProblemPopulateProblemModel;
}

export type CreateCourseRequestForm = {
    title: string;
    description: PlateEditorValueType;
    image?: File | string | null;
    isPrivate?: boolean;
    collectionsInterface: ItemInterface[];
    groupPermissions: CourseGroupPermissionRequestForm[];
    course: null | TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupAndTopicGroupPermissionPopulateGroupModel //| TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemAndTopicGroupPermissionPopulateGroupModel | TopicPopulateTopicCollectionPopulateCollectionAndTopicGroupPermissionPopulateGroupModel | null;
    // collectionGroupPermissions: CourseCollectionsGroupPermissionRequestForm[];
}
