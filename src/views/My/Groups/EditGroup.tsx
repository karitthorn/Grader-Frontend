import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import CreateGroupForm, { OnGroupSavedCallback } from "../../../components/Forms/CreateGroupForm";
import { GroupService } from "../../../services/Group.service";
import { GroupPopulateGroupMemberPopulateAccountSecureModel } from "../../../types/models/Group.model";
import { transformCreateGroupRequestForm2CreateGroupRequest } from "../../../types/adapters/CreateGroupRequestForm.adapter";
import { transformGroupPopulateGroupMemberPopulateAccountSecureModel2CreateGroupRequestForm } from "../../../types/adapters/Group.adapter";

const EditGroup = () => {
	const { groupId } = useParams();
	const navigate = useNavigate();
	const accountId = String(localStorage.getItem("account_id"));

	const [createRequest, setCreateRequest] =
		useState<CreateGroupRequestForm>();

	useEffect(() => {
		GroupService.get(String(groupId), {
			populate_members: true,
		}).then((response) => {
			const data =
				response.data as GroupPopulateGroupMemberPopulateAccountSecureModel;
			setCreateRequest(transformGroupPopulateGroupMemberPopulateAccountSecureModel2CreateGroupRequestForm(data));
			console.log(data)
		});
	}, [groupId]);

	const handleSave = ({setLoading,createRequest}:OnGroupSavedCallback) => {
		const request = transformCreateGroupRequestForm2CreateGroupRequest(createRequest)
		const memberIds = createRequest.membersInterface.map((item) => item.id as string)
		
		setLoading(true)
		console.log("EditGroup",request)
		GroupService.update(String(groupId),request).then((response) => {
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
