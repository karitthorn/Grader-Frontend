import React from "react";
import PermissionSwitch from "../../Permissions/PermissionSwitch";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import { CreateCourseRequestForm } from "../../../types/forms/CreateCourseRequestForm";
import { set } from 'react-hook-form';

const CoursePermissionSwitchGroup = ({
	disabled = false,
	manageCoursesChecked=false,
	viewCourseLogsChecked=false,
	viewCoursesChecked=false,
	onClickManageCourses=()=>{},
	onClickViewCourseLogs=()=>{},
	onClickViewCourses=()=>{},
}: {
	disabled?: boolean;
	manageCoursesChecked?: boolean;
	viewCourseLogsChecked?: boolean;
	viewCoursesChecked?: boolean;
	onClickManageCourses?: () => void | undefined
	onClickViewCourseLogs?: () => void | undefined
	onClickViewCourses?: () => void | undefined
}) => {
	return (
		<>
			<PermissionSwitch
				title="Manage Courses"
				description="Can edit course name and description. Can add or remove collections from course as well."
				checked={manageCoursesChecked}
				onClick={() => onClickManageCourses()}
				disabled={disabled}
			/>
			<PermissionSwitch
				title="View Courses Update Log"
				description="Can view update log and insight in courses
						(submissions, members, etc.)."
				checked={viewCourseLogsChecked}
				onClick={() => onClickViewCourseLogs()}
				disabled={disabled}
			/>
			<PermissionSwitch
				title="View Courses"
				description="Can view course and thier resources including
						collections and problems. Note that those
						collections and problems must be accessible as well."
				checked={viewCoursesChecked}
				onClick={() => onClickViewCourses()}
				disabled={disabled}
			/>
		</>
	);
};

export default CoursePermissionSwitchGroup;
