import React, { useEffect, useState } from "react";
import { Separator } from "../shadcn/Seperator";
import { ScrollArea } from "../shadcn/ScrollArea";
import PermissionSwitchScrollArea from "../Permissions/PermissionSwitchScrollArea";
import CoursePermissionSwitchGroup from "./PermissionSwitchGroups/CoursePermissionSwitchGroup";
import {
	CourseGroupPermissionRequestForm,
	CreateCourseRequestForm,
} from "../../types/forms/CreateCourseRequestForm";
import { PlusCircle, Users } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../shadcn/Tooltip";
import { Dialog, DialogContent } from "../shadcn/Dialog";
import { Input } from "../shadcn/Input";
import GroupCheckbox from "../GroupCheckbox";
import { Button } from "../shadcn/Button";
import { GroupService } from "../../services/Group.service";
import { GroupModel } from "../../types/models/Group.model";

const GroupListItem = ({
	hexColor = "#000000",
	name = "Group Name",
	hightlighted = false,
}: {
	hexColor?: string;
	name?: string;
	hightlighted?: boolean;
}) => {
	const customStyle = () => {
		let style =
			"font-bold text-base flex items-center cursor-pointer py-1 px-3 rounded-md ";
		if (hightlighted) {
			style += " bg-green-100 text-white";
		}

		return style;
	};

	return (
		<div
			style={{
				backgroundColor: hightlighted ? hexColor : "#FFFFFF",
			}}
			className={customStyle()}
		>
			<div
				style={{
					backgroundColor: hightlighted ? "#FFFFFF" : hexColor,
				}}
				className="w-3 h-3 rounded-full mr-2"
			></div>
			<div>{name}</div>
		</div>
	);
};

const GroupAndPermissionManager = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateCourseRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateCourseRequestForm>
	>;
}) => {

	const accountId = String(localStorage.getItem("account_id"))

	const [allGroups, setAllGroups] = useState<GroupModel[]>([]);
	const [openAddGroupsDialog, setOpenAddGroupsDialog] = useState<boolean>(false);
	const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([]);

	const [groupPermission, setGroupPermission] =
		useState<CourseGroupPermissionRequestForm>();
	const [selectedIndex, setselectedIndex] = useState<number>(-1);

	const handleSelectGroupCheckbox = (groupId: string) => {
		if (selectedGroupIds.includes(groupId)) {
			setSelectedGroupIds(selectedGroupIds.filter((g) => g !== groupId));
		} else {
			setSelectedGroupIds([...selectedGroupIds, groupId]);
		}
	}

	const getNotInPermissionGroup = () => {
		const inPermissiongroupIds = createRequest.groupPermissions.map((groupPermission) => groupPermission.group.group_id)
		return allGroups.filter((group) => !inPermissiongroupIds.includes(group.group_id))
	}

	const handleAddGroups = () => {
		const addGroups = allGroups.filter((group) => selectedGroupIds.includes(group.group_id))
		const newGroupPermissions = addGroups.map((group) => ({
			group_id: group.group_id,
			group,
			manageCourses: group.permission_manage_topics,
			viewCourseLogs: group.permission_view_topics_log,
			viewCourses: group.permission_view_topics,
		}))

		setCreateRequest({
			...createRequest,
			groupPermissions: [
				...createRequest.groupPermissions,
				...newGroupPermissions,
			],
		})

		setSelectedGroupIds([])
		setOpenAddGroupsDialog(false)
	}

	useEffect(() => {
		setGroupPermission(createRequest?.groupPermissions[selectedIndex]);
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

	useEffect(() => {
		GroupService.getAllAsCreator(accountId).then((response) => {
			setAllGroups(response.data.groups);
		})
	},[])

	return (
		<div className="flex">
			<div className="w-1/6">
				<div className="flex text-green-600 items-center justify-between">
					<p className="flex font-bold text-base">
						<Users size={20} className="mr-2" />
						Groups
					</p>
					<Tooltip>
						<TooltipTrigger>
							<PlusCircle onClick={() => setOpenAddGroupsDialog(true)} size={20} />
						</TooltipTrigger>
						<TooltipContent >Add Group</TooltipContent>
					</Tooltip>
				</div>
				<ScrollArea className="mt-2">
					<div className="grid gap-y-1">
						{createRequest.groupPermissions.map(
							(groupPermission, index) => (
								<div onClick={() => setselectedIndex(index)}>
									<GroupListItem
										key={index}
										name={groupPermission.group.name}
										hexColor={groupPermission.group.color}
										hightlighted={selectedIndex === index}
									/>
								</div>
							)
						)}
					</div>
				</ScrollArea>
			</div>
			<div>
				<Separator orientation="vertical" className="mx-3" />
			</div>
			<div className="w-5/6">
				<PermissionSwitchScrollArea>
					{groupPermission && selectedIndex >= 0 && (
						<CoursePermissionSwitchGroup
							manageCoursesChecked={groupPermission.manageCourses}
							viewCourseLogsChecked={
								groupPermission.viewCourseLogs
							}
							viewCoursesChecked={groupPermission.viewCourses}
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
									viewCourses: !groupPermission.viewCourses,
								})
							}
						/>
					)}
				</PermissionSwitchScrollArea>
			</div>

			<Dialog open={openAddGroupsDialog} onOpenChange={setOpenAddGroupsDialog}>
				<DialogContent className="max-w-[80%]">
					<p className="font-bold">Add Groups</p>
					<ScrollArea>
						<div className="grid grid-cols-4 gap-2">
							{
								getNotInPermissionGroup().map((group) => (
									<GroupCheckbox
										onClick={() => handleSelectGroupCheckbox(group.group_id)}
										checked={selectedGroupIds.includes(group.group_id)}
										group={group}
									/>
								))
							}
						</div>
					</ScrollArea>
					<div className="flex justify-end">

					<Button onClick={handleAddGroups}>Add Groups</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default GroupAndPermissionManager;
