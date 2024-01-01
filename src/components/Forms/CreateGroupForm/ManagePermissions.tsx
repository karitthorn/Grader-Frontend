import React from "react";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import { Separator } from "../../shadcn/Seperator";
import { ScrollArea } from "../../shadcn/ScrollArea";
import { Switch } from "../../shadcn/Switch";
import PermissionSwitch from "../../PermissionSwitch/PermissionSwitch";
import PermissionSwitchTitle from "../../PermissionSwitch/PermissionSwitchTitle";
import PermissionSwitchDescription from "../../PermissionSwitch/PermissionSwitchDescription";

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
				<ScrollArea className="h-[80vh]">
					{/* <p className='font-medium text-'>Course Permissions</p> */}
					<PermissionSwitch>
                        <PermissionSwitchTitle>Course Permissions</PermissionSwitchTitle>
                        <PermissionSwitchDescription>
                            Can edit course name and description.
                        </PermissionSwitchDescription>
                    </PermissionSwitch>

                    <PermissionSwitch>
                        <PermissionSwitchTitle>Manage Course Members</PermissionSwitchTitle>
                        <PermissionSwitchDescription>
                            Can manage course members.
                        </PermissionSwitchDescription>
                    </PermissionSwitch>
				</ScrollArea>
			</div>
		</div>
	);
};

export default ManagePermissions;
