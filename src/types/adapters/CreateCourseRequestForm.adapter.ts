import { CollectionGroupPermissionCreateRequest } from "../apis/Collection.api";
import { CourseGroupPermissionCreateRequest } from "../apis/Topic.api";
import { CreateCourseRequestForm } from "../forms/CreateCourseRequestForm";

export function transformCreateCourseRequestForm2CreateTopicRequest(
	createRequest: CreateCourseRequestForm
): {
	formData: FormData;
	collectionIds: string[];
	groups: CourseGroupPermissionCreateRequest[];
	collectionGroupsPermissions: {
		collection_id: string;
		groupPermissions: CollectionGroupPermissionCreateRequest[];
	}[]
} {
	const formData = new FormData();
	formData.append("name", createRequest.title);
	formData.append("description", JSON.stringify(createRequest.description));
	// formData.append("image_url", createRequest.image);
	formData.append("is_private", createRequest.isPrivate ? "true" : "false");

	const collectionIds: string[] = createRequest.collectionsInterface.map(
		(collection) => collection.id as string
	);
	const groups = createRequest.groupPermissions.map((groupPermission) => ({
		group_id: groupPermission.group_id,
		permission_manage_topics: groupPermission.manageCourses,
		permission_view_topics: groupPermission.viewCourses,
		permission_view_topics_log: groupPermission.viewCourseLogs,
	}));

	const collectionGroupsPermissions = createRequest.collectionsInterface.map((cc) => ({
		collection_id: cc.collection.collection_id,
		groupPermissions: cc.groupPermissions.map((gp) => ({
			group_id: gp.group.group_id,
			permission_manage_collections: gp.manageCollections,
			permission_view_collections: gp.viewCollections,
		}))
	})) ?? []

	console.log("collectionGroupsPermissions", collectionGroupsPermissions)

	return { formData, collectionIds, groups, collectionGroupsPermissions };
}
