import React from "react";
import PermissionSwitch from "../../Permissions/PermissionSwitch";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import { CreateCourseRequestForm } from "../../../types/forms/CreateCourseRequestForm";

const CollectionPermissionSwitchGroup = ({
	manageCollectionsChecked = false,
	viewCollectionsChecked = false,
	onClickManageCollections = () => {},
	onClickViewCollections = () => {},
}: {
	manageCollectionsChecked?: boolean;
	viewCollectionsChecked?: boolean;
	onClickManageCollections?: () => void | undefined;
	onClickViewCollections?: () => void | undefined;
}) => {
	return (
		<>
			<PermissionSwitch
				title="Manage Collections"
				description="Can edit collections name and description. Can add
						or remove problems from collection as well."
				checked={manageCollectionsChecked}
				onClick={() => onClickManageCollections()}
			/>
			<PermissionSwitch
				title="View Collections"
				description="Can view collection and thier problems. Note that
						those problems must be accessible as well."
				checked={viewCollectionsChecked}
				onClick={() => onClickViewCollections()}
			/>
		</>
	);
};

export default CollectionPermissionSwitchGroup;
