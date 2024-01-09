import React, { useEffect, useState } from "react";
import {
	CollectionGroupPermissionRequestForm,
	CreateCollectionRequestForm,
} from "../../../types/forms/CreateCollectionRequestForm";
import GroupAndPermissionManager, {
	GroupAndPermissionManagerOnAddGroupsCallback,
	GroupAndPermissionManagerOnRemoveGroupCallback,
} from "../GroupAndPermissionManager";
import CollectionPermissionSwitchGroup from "../PermissionSwitchGroups/CollectionPermissionSwitchGroup";
import { GroupModel } from "../../../types/models/Group.model";
import { GroupService } from "../../../services/Group.service";

const ManageGroups = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateCollectionRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateCollectionRequestForm>
	>;
}) => {

	const accountId = String(localStorage.getItem("account_id"));

	const [groupPermission, setGroupPermission] =
		useState<CollectionGroupPermissionRequestForm>();

	const [selectedIndex, setSelectedIndex] = useState<number>(-1);

	const handleAddGroups = ({
		addingGroups,
	}: GroupAndPermissionManagerOnAddGroupsCallback) => {
		const newGroupPermissions = addingGroups.map((group) => ({
			group_id: group.group_id,
			group,
			manageCollections: group.permission_manage_collections,
			viewCollections: group.permission_view_collections,
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

	const [allGroups, setAllGroups] = useState<GroupModel[]>([]);

	useEffect(() => {
		GroupService.getAllAsCreator(accountId).then((response) => {
			setAllGroups(response.data.groups);
		})
	},[accountId])

	return (
		<GroupAndPermissionManager
			allGroups={allGroups}
			createRequest={createRequest}
			setCreateRequest={setCreateRequest}
			onAddGroups={(e) => handleAddGroups(e)}
			onRemoveGroup={(e) => handleRemoveGroup(e)}
			selectedIndex={selectedIndex}
			setSelectedIndex={setSelectedIndex}
		>
			{groupPermission && selectedIndex >= 0 && (
				<CollectionPermissionSwitchGroup
					manageCollectionsChecked={groupPermission.manageCollections}
					viewCollectionsChecked={groupPermission.viewCollections}
					onClickManageCollections={() => {
						setGroupPermission({
							...groupPermission,
							manageCollections:
								!groupPermission.manageCollections,
						});
					}}
					onClickViewCollections={() => {
						setGroupPermission({
							...groupPermission,
							viewCollections: !groupPermission.viewCollections,
						});
					}}
				/>
			)}
		</GroupAndPermissionManager>
	);
};

export default ManageGroups;
