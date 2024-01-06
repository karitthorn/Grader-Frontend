import React, { useEffect, useState } from "react";
import {
	CourseGroupPermissionRequestForm,
	CreateCourseRequestForm,
} from "../../../types/forms/CreateCourseRequestForm";
import GroupAndPermissionManager, {
	GroupAndPermissionManagerOnAddGroupsCallback,
	GroupAndPermissionManagerOnRemoveGroupCallback,
} from "../GroupAndPermissionManager";
import CoursePermissionSwitchGroup from "../PermissionSwitchGroups/CoursePermissionSwitchGroup";

const ManageGroups = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateCourseRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateCourseRequestForm>
	>;
}) => {
	const [groupPermission, setGroupPermission] =
		useState<CourseGroupPermissionRequestForm>();

	const [selectedIndex, setselectedIndex] = useState<number>(-1);

	const handleAddGroups = ({
		addingGroups,
	}: GroupAndPermissionManagerOnAddGroupsCallback) => {
		const newGroupPermissions = addingGroups.map((group) => ({
			group_id: group.group_id,
			group,
			manageCourses: group.permission_manage_topics,
			viewCourseLogs: group.permission_view_topics_log,
			viewCourses: group.permission_view_topics,
		}));

		setCreateRequest({
			...createRequest,
			groupPermissions: [
				...createRequest.groupPermissions,
				...newGroupPermissions,
			],
		});
	};

	const handleRemoveGroup = ({index}:GroupAndPermissionManagerOnRemoveGroupCallback) => {
		setCreateRequest({
			...createRequest,
			groupPermissions: [
				...createRequest.groupPermissions.slice(0, index),
				...createRequest.groupPermissions.slice(index + 1),
			],
		});
	}

	useEffect(() => {
		setGroupPermission(createRequest.groupPermissions[selectedIndex]);
	}, [selectedIndex]);

	useEffect(() => {
		if (groupPermission) {
			setCreateRequest({
				...createRequest,
				groupPermissions: [
					...createRequest.groupPermissions.slice(0, selectedIndex),
					groupPermission,
					...createRequest.groupPermissions.slice(selectedIndex + 1),
				],
			});
		}
	}, [groupPermission]);

	return (
		<GroupAndPermissionManager
			createRequest={createRequest}
			setCreateRequest={setCreateRequest}
			onAddGroups={(e) => handleAddGroups(e)}
			onRemoveGroup={(e) => handleRemoveGroup(e)}
			selectedIndex={selectedIndex}
			setSelectedIndex={setselectedIndex}
		>
			{groupPermission && selectedIndex >= 0 && (
				<CoursePermissionSwitchGroup
					manageCoursesChecked={groupPermission.manageCourses}
					viewCourseLogsChecked={groupPermission.viewCourseLogs}
					viewCoursesChecked={groupPermission.viewCourses}
					onClickManageCourses={() =>
						setGroupPermission({
							...groupPermission,
							manageCourses: !groupPermission.manageCourses,
						})
					}
					onClickViewCourseLogs={() =>
						setGroupPermission({
							...groupPermission,
							viewCourseLogs: !groupPermission.viewCourseLogs,
						})
					}
					onClickViewCourses={() =>
						setGroupPermission({
							...groupPermission,
							viewCourses: !groupPermission.viewCourses,
						})
					}
				/>
			)}
		</GroupAndPermissionManager>
	);
};

export default ManageGroups;
