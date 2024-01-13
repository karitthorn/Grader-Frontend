import { GroupCreateRequest } from "../apis/Group.api";
import { CreateGroupRequestForm } from "../forms/CreateGroupRequestForm";

export function transformCreateGroupRequestForm2CreateGroupRequest(createRequest: CreateGroupRequestForm): GroupCreateRequest {
    return {
        name: createRequest.name,
        description: createRequest.description,
        color: createRequest.color,
        permission_manage_topics: createRequest.manageCourses,
        permission_view_topics: createRequest.viewCourses,
        permission_view_topics_log: createRequest.viewCourseLogs,
        permission_manage_collections: createRequest.manageCollections,
        permission_view_collections: createRequest.viewCollections,
        permission_manage_problems: createRequest.manageProblems,
        permission_view_problems: createRequest.viewProblems
    }
}