import React from "react";
import PermissionSwitch from "../../Permissions/PermissionSwitch";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import { CreateCourseRequestForm } from "../../../types/forms/CreateCourseRequestForm";

const ProblemPermissionSwitchGroup = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateGroupRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateGroupRequestForm>
	>;
}) => {
	return (
		<>
			<PermissionSwitch
				title="Manage Problems"
				description="Can edit problem."
				checked={createRequest.manageProblems}
				onClick={() =>
					setCreateRequest({
						...createRequest,
						manageProblems: !createRequest.manageProblems,
					})
				}
			/>
			<PermissionSwitch
				title="View Problems"
				description="Can view problems."
				checked={createRequest.viewProblems}
				onClick={() =>
					setCreateRequest({
						...createRequest,
						viewProblems: !createRequest.viewProblems,
					})
				}
			/>
		</>
	);
};

export default ProblemPermissionSwitchGroup;
