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
import { Tabs, TabsList, TabsTrigger } from "../../shadcn/Tabs";
import PermissionSwitchScrollArea from "../../Permissions/PermissionSwitchScrollArea";
import MyCollectionMiniCard2 from "../../Cards/CollectionCards/MyCollectionMiniCard2";
import {
	CollectionPopulateCollectionProblemPopulateProblemModel,
	CollectionProblemPopulateProblemModel,
} from "../../../types/models/Collection.model";
import { Switch } from "../../shadcn/Switch";

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
	const [currentGroupId, setCurrentGroupId] = useState<string>("");

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

	const handleRemoveGroup = ({
		index,
	}: GroupAndPermissionManagerOnRemoveGroupCallback) => {
		setCreateRequest({
			...createRequest,
			groupPermissions: [
				...createRequest.groupPermissions.slice(0, index),
				...createRequest.groupPermissions.slice(index + 1),
			],
		});
	};

	useEffect(() => {
		setGroupPermission(createRequest.groupPermissions[selectedIndex]);
		if (selectedIndex >= 0) {
			setCurrentGroupId(createRequest.groupPermissions[selectedIndex].group_id)
		}
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

	const [tabValue, setTabValue] = useState("course");

	return (
		<>
			<div className="flex justify-end">
				<Tabs value={tabValue} onValueChange={(e) => setTabValue(e)}>
					<TabsList>
						<TabsTrigger value="course">
							Course Permissions
						</TabsTrigger>
						<TabsTrigger value="collections">
							Collection Permissions
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>
			<GroupAndPermissionManager
				createRequest={createRequest}
				setCreateRequest={setCreateRequest}
				onAddGroups={(e) => handleAddGroups(e)}
				onRemoveGroup={(e) => handleRemoveGroup(e)}
				selectedIndex={selectedIndex}
				setSelectedIndex={setselectedIndex}
			>
				<>
					{tabValue === "course" && (
						<PermissionSwitchScrollArea>
							{groupPermission && selectedIndex >= 0 && (
								<CoursePermissionSwitchGroup
									manageCoursesChecked={
										groupPermission.manageCourses
									}
									viewCourseLogsChecked={
										groupPermission.viewCourseLogs
									}
									viewCoursesChecked={
										groupPermission.viewCourses
									}
									onClickManageCourses={() =>
										setGroupPermission({
											...groupPermission,
											manageCourses:
												!groupPermission.manageCourses,
										})
									}
									onClickViewCourseLogs={() =>
										setGroupPermission({
											...groupPermission,
											viewCourseLogs:
												!groupPermission.viewCourseLogs,
										})
									}
									onClickViewCourses={() =>
										setGroupPermission({
											...groupPermission,
											viewCourses:
												!groupPermission.viewCourses,
										})
									}
								/>
							)}
						</PermissionSwitchScrollArea>
					)}

					{tabValue === "collections" &&
						groupPermission &&
						selectedIndex >= 0 && (
							<div className="grid gap-y-2 p-2 rounded-md">
								{createRequest.course?.collections?.map(
									(courseCollection) => (
										<div className="flex items-center justify-between pr-5">
											<div className="w-1/2">
												<MyCollectionMiniCard2
													disabledHighlight
													collection={
														courseCollection.collection as CollectionPopulateCollectionProblemPopulateProblemModel
													}
												/>
											</div>

											<div className="text-base font-medium flex items-center">
												View Collection
												<Switch 
													checked={courseCollection.collection.group_permissions.find((gp) => gp.group.group_id === currentGroupId)?.permission_view_collections}
													onClick={() => {
														const newGroupPermissions = courseCollection.collection.group_permissions.map((gp) => {
															if(gp.group.group_id === currentGroupId) {
																return {
																	...gp,
																	permission_view_collections: !gp.permission_view_collections
																}
															} else {
																return gp;
															}
														})

														if (!createRequest.course) {
															return;
														}

														setCreateRequest({
															...createRequest,
															course: {
																...createRequest.course,
																collections: createRequest.course.collections.map((cc) => {
																	if(cc.collection.collection_id === courseCollection.collection.collection_id) {
																		return {
																			...cc,
																			collection: {
																				...cc.collection,
																				group_permissions: newGroupPermissions
																			}
																		}
																	} else {
																		return cc;
																	}
																})
															}
														})
													}}

												className="ml-2" />
											</div>
											<div className="text-base font-medium flex items-center">
												Manage Collection
												<Switch 
													checked={courseCollection.collection.group_permissions.find((gp) => gp.group.group_id === currentGroupId)?.permission_manage_collections}
													onClick={() => {
														const newGroupPermissions = courseCollection.collection.group_permissions.map((gp) => {
															if(gp.group.group_id === currentGroupId) {
																return {
																	...gp,
																	permission_manage_collections: true //!gp.permission_manage_collections
																}
															} else {
																return gp;
															}
														})

														if (!createRequest.course) {
															return;
														}

														setCreateRequest({
															...createRequest,
															course: {
																...createRequest.course,
																collections: createRequest.course.collections.map((cc) => {
																	if(cc.collection.collection_id === courseCollection.collection.collection_id) {
																		return {
																			...cc,
																			collection: {
																				...cc.collection,
																				group_permissions: newGroupPermissions
																			}
																		}
																	} else {
																		return cc;
																	}
																})
															}
														})
													}}
												className="ml-2" />
											</div>
										</div>
									)
								)}
							</div>
						)}
				</>
			</GroupAndPermissionManager>
		</>
	);
};

export default ManageGroups;
