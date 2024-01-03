import React from "react";
import PermissionSwitch from "../../Permissions/PermissionSwitch";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import { CreateCourseRequestForm } from "../../../types/forms/CreateCourseRequestForm";

const CollectionPermissionSwitchGroup = ({
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
				title="Manage Collections"
				description="Can edit collections name and description. Can add
						or remove problems from collection as well."
				checked={createRequest.manageCollections}
				onClick={() =>
					setCreateRequest({
						...createRequest,
						manageCollections: !createRequest.manageCollections,
					})
				}
			/>
			<PermissionSwitch
				title="View Collections"
				description="Can view collection and thier problems. Note that
						those problems must be accessible as well."
				checked={createRequest.viewCollections}
				onClick={() =>
					setCreateRequest({
						...createRequest,
						viewCollections: !createRequest.viewCollections,
					})
				}
			/>
		</>
	);
};

export default CollectionPermissionSwitchGroup;
