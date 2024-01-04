import { CreateCourseRequestForm } from "../forms/CreateCourseRequestForm";
import { TopicPopulateTopicCollectionPopulateCollectionAndTopicGroupPermissionPopulateGroupModel } from "../models/Topic.model";

export function transformTopicPopulateTopicCollectionPopulateCollectionAndTopicGroupPermissionPopulateGroupModel2CreateCourseRequest(topic:TopicPopulateTopicCollectionPopulateCollectionAndTopicGroupPermissionPopulateGroupModel): CreateCourseRequestForm {
    return {
        title: topic.name,
        description: JSON.parse(String(topic.description)),
        image: topic.image_url,
        isPrivate: topic.is_private,
        collectionsInterface: topic.collections.map((tc) => ({
            id: tc.collection.collection_id,
            name: tc.collection.name,
        })),
        groupPermissions: topic.group_permissions.map((gp) => ({
            group_id: gp.group.group_id,
            group: gp.group,
            manageCourses: gp.permission_manage_topics,
            viewCourses: gp.permission_view_topics,
            viewCourseLogs: gp.permission_view_topics_log,
        })),
        course: topic
    }
}