import React from "react";

const PermissionSwitchDescription = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	return <p className="text-base my-3">{children}</p>;
};

export default PermissionSwitchDescription;
