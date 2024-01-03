import React from "react";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import { Separator } from "../../shadcn/Seperator";
import { ScrollArea } from "../../shadcn/ScrollArea";
import { Switch } from "../../shadcn/Switch";
import PermissionSwitch from "../../Permissions/PermissionSwitch";
import PermissionSwitchScrollArea from "../../Permissions/PermissionSwitchScrollArea";
import CoursePermissionSwitchGroup from "../PermissionSwitchGroups/CoursePermissionSwitchGroup";
import CollectionPermissionSwitchGroup from "../PermissionSwitchGroups/CollectionPermissionSwitchGroup";
import ProblemPermissionSwitchGroup from "../PermissionSwitchGroups/ProblemPermissionSwitchGroup";

const ManagePermissions = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateGroupRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateGroupRequestForm>
	>;
}) => {
	return (
		<div>
			<p className="font-bold text-2xl">Manage Permissions</p>

			<div className="mt-5">
				<PermissionSwitchScrollArea
					className="h-[70vh] xxl:h-[75vh]"
					childrenClassName="w-[95%]"
				>
					<p className="font-bold text-base text-green-600 mt-3">
						Course Permission
					</p>
					<CoursePermissionSwitchGroup
						manageCoursesChecked={createRequest.manageCourses}
						viewCourseLogsChecked={createRequest.viewCourseLogs}
						viewCoursesChecked={createRequest.viewCourses}
						onClickManageCourses={() =>
							setCreateRequest({
								...createRequest,
								manageCourses: !createRequest.manageCourses,
							})
						}
						onClickViewCourseLogs={() =>
							setCreateRequest({
								...createRequest,
								viewCourseLogs: !createRequest.viewCourseLogs,
							})
						}
						onClickViewCourses={() =>
							setCreateRequest({
								...createRequest,
								viewCourses: !createRequest.viewCourses,
							})
						}
					/>
					<p className="font-bold text-base text-green-600 mt-3">
						Collection Permission
					</p>
					<CollectionPermissionSwitchGroup
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
					<p className="font-bold text-base text-green-600 mt-3">
						Problem Permission
					</p>
					<ProblemPermissionSwitchGroup
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				</PermissionSwitchScrollArea>
			</div>
		</div>
	);
};

export default ManagePermissions;
