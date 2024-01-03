import React from "react";
import { CreateCourseRequestForm } from "../../../types/forms/CreateCourseRequestForm";
import GroupAndPermissionManager from "../GroupAndPermissionManager";

const ManageGroups = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateCourseRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateCourseRequestForm>
	>;
}) => {
	return (
		<GroupAndPermissionManager
			createRequest={createRequest}
			setCreateRequest={setCreateRequest}
		/>
	);
};

export default ManageGroups;
