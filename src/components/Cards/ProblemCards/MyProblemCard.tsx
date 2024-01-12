import {
	FileSpreadsheet,
	PencilIcon,
	Trash
} from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	ProblemPopulateTestcases,
	TestcaseModel
} from "../../../types/models/Problem.model";
import { readableDateFormat } from "../../../utilities/ReadableDateFormat";
import { onMiddleClickOpenInNewTab } from "../../../utilities/OnMiddleClickOpenInNewTab";
import Checkmark from "../../Checkmark";
import DeleteProblemConfirmationDialog from "../../Dialogs/DeleteProblemConfirmationDialog";
import { Card, CardContent } from "../../shadcn/Card";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuTrigger,
} from "../../shadcn/ContextMenu";
import MyProblemContextMenu from "../../ContextMenus/MyProblemContextMenu";

const checkRuntimeStatus = (testcases: TestcaseModel[]) => {
	for (const testcase of testcases) {
		if (testcase.runtime_status !== "OK") {
			return false;
		}
	}
	return true;
};

// const MyProblemContextMenu = ({ children,problem }: { 
// 	children: React.ReactNode 
// 	problem: ProblemPopulateTestcases
// }) => {

// 	const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

// 	return (
// 		<ContextMenu>
// 			<DeleteProblemConfirmationDialog
// 				problem={problem}
// 				open={openDeleteDialog}
// 				setOpen={setOpenDeleteDialog}
// 				afterDelete={() => window.location.reload()}
// 			/>
// 			<ContextMenuTrigger>{children}</ContextMenuTrigger>
// 			<ContextMenuContent>
// 				<ContextMenuItem>
// 					<PencilIcon className="mr-2" size={16} />
// 					Edit
// 				</ContextMenuItem>
// 				<ContextMenuItem onClick={() => setOpenDeleteDialog(true)}>
// 					<Trash className="mr-2" size={16} />
// 					Delete
// 				</ContextMenuItem>
// 			</ContextMenuContent>
// 		</ContextMenu>
// 	);
// };

const MyProblemCard = ({ problem }: { problem: ProblemPopulateTestcases }) => {
	const navigate = useNavigate();

	const [highlightTitle, setHighlightTitle] = useState(false);
	const [toolVisible, setToolVisible] = useState(true);

	const handleMouseOver = () => {
		setHighlightTitle(true);
		setToolVisible(true);
	};
	const handleMouseOut = () => {
		setHighlightTitle(false);
		setToolVisible(false);
	};


	return (
		<MyProblemContextMenu problem={problem}>
			
			<Card
				onMouseDown={(e) => onMiddleClickOpenInNewTab(e,`/my/problems/${problem.problem_id}`)}
				onClick={() => navigate(`/my/problems/${problem.problem_id}`)}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				className={`pt-6 px-5 cursor-pointer ${
					highlightTitle ? "border-green-500 bg-green-100" : ""
				}`}
			>
				<CardContent>
					<div className="flex items-center mb-2">
						<FileSpreadsheet className="text-blue-400 mr-2"/>
						{!highlightTitle && (
							<h1 className="	font-bold">{problem.title}</h1>
						)}
						{highlightTitle && (
							<h1 className="font-bold text-green-600">
								{problem.title}
							</h1>
						)}
					</div>

					<div className="flex text-sm font-medium items-stretch">
						<div className="w-1/6 self-end grid gap-y-2">
							<div>
								<p className="">Lasted Updated</p>
								<p className="text-gray-400">
									{readableDateFormat(problem.updated_date)}
								</p>
							</div>

							<div>
								<p className="">Created Date</p>
								<p className="text-gray-400">
									{readableDateFormat(problem.created_date)}
								</p>
							</div>
						</div>

						<div className="w-1/6 self-end grid gap-y-2">
							<div>
								<p className="">Time Limited</p>
								<p className="text-gray-400">
									{problem.time_limit}s
								</p>
							</div>

							<div>
								<p className="">Visibility</p>
								<p className="text-gray-400">
									{problem.is_private ? "Private" : "Public"}
								</p>
							</div>
						</div>

						<div className="grid gap-y-1">
							<div className="flex items-center">
								<Checkmark status={problem.solution !== ""} />
								Source Code
							</div>
							<div className="flex items-center">
								<Checkmark status={problem.testcases.length !== 0} />
								Testcases ({problem.testcases.length})
							</div>
							<div className="flex items-center">
								<Checkmark status={checkRuntimeStatus(problem.testcases)} />
								No Runtime Error
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</MyProblemContextMenu>
	);
};

export default MyProblemCard;
