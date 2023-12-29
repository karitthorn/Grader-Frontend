import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import CreateGroupForm, { OnGroupSavedCallback } from "../../../components/Forms/CreateGroupForm";
import { GroupService } from "../../../services/Group.service";
import { GroupPopulateGroupMemberPopulateAccountSecureModel } from "../../../types/models/Group.model";
import { transformCreateGroupRequestForm2CreateGroupRequest } from "../../../types/adapters/CreateGroupRequestForm.adapter";

const EditGroup = () => {
	const { groupId } = useParams();
	const navigate = useNavigate();
	const accountId = Number(localStorage.getItem("account_id"));

	const [createRequest, setCreateRequest] =
		useState<CreateGroupRequestForm>();

	useEffect(() => {
		GroupService.get(Number(groupId), {
			populate_members: true,
		}).then((response) => {
			const data =
				response.data as GroupPopulateGroupMemberPopulateAccountSecureModel;
			setCreateRequest({
				name: data.name,
				description: data.description,
				color: data.color,
				membersInterface: data.members.map((member) => ({
					id: member.account.account_id,
					label: member.account.username,
				})),
			});
		});
	}, [groupId]);

	const handleSave = ({setLoading,createRequest}:OnGroupSavedCallback) => {
		const request = transformCreateGroupRequestForm2CreateGroupRequest(createRequest)
		const memberIds = createRequest.membersInterface.map((item) => item.id as number)
		
		setLoading(true)
		GroupService.update(Number(groupId),request).then((response) => {
			return GroupService.updateMembers(response.data.group_id,memberIds)
		}).then((response) => {
			setLoading(false)
		})
	}

	return (
		<NavbarSidebarLayout>
			{createRequest && (
				<CreateGroupForm
					onCourseSave={(e) => handleSave(e)}
					createRequestInitialValue={createRequest}
				/>
			)}
		</NavbarSidebarLayout>
	);
};

export default EditGroup;
