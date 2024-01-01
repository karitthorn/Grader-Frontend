import React from "react";
import { Switch } from "../shadcn/Switch";

const PermissionSwitchTitle = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	return (
		<div className="flex justify-between">
			<p className="font-bold">{children}</p>
			<Switch />
		</div>
	);
};

export default PermissionSwitchTitle;
