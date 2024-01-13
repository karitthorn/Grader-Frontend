import PermissionSwitch from "../../Permissions/PermissionSwitch";

const ProblemPermissionSwitchGroup = ({
	manageProblemsChecked = false,
	viewProblemsChecked = false,
	onClickManageProblems = () => {},
	onClickViewProblems = () => {},
}: {
	manageProblemsChecked?: boolean;
	viewProblemsChecked?: boolean;
	onClickManageProblems?: () => void | undefined;
	onClickViewProblems?: () => void | undefined;
}) => {
	return (
		<>
			<PermissionSwitch
				title="Manage Problems"
				description="Can edit problem."
				checked={manageProblemsChecked}
				onClick={() => onClickManageProblems()}
			/>
			<PermissionSwitch
				title="View Problems"
				description="Can view problems."
				checked={viewProblemsChecked}
				onClick={() => onClickViewProblems()}
			/>
		</>
	);
};

export default ProblemPermissionSwitchGroup;
