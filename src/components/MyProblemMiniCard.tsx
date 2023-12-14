import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import { Button } from "./shadcn/Button";
import {
	Check,
	CheckCircle2,
	FileSpreadsheet,
	Pencil,
	PencilIcon,
	Trash,
	X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
	ProblemModel,
	ProblemPopulateTestcases,
	ProblemSecureModel,
	TestcaseModel,
} from "../types/models/Problem.model";
import { readableDateFormat } from "../utilities/ReadableDateFormat";
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
} from "./shadcn/ContextMenu";
import DeleteProblemConfirmationDialog from "./DeleteProblemConfirmationDialog";
import Checkmark from "./Checkmark";
import { Tooltip, TooltipContent, TooltipTrigger } from "./shadcn/tooltip";

const checkRuntimeStatus = (testcases: TestcaseModel[]) => {
	for (const testcase of testcases) {
		if (testcase.runtime_status !== "OK") {
			return false;
		}
	}
	return true;
};

const MyProblemContextMenu = ({
	children,
	problem,
}: {
	children: React.ReactNode;
	problem: ProblemPopulateTestcases;
}) => {
	const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

	return (
		<ContextMenu>
			<DeleteProblemConfirmationDialog
				problem={problem}
				open={openDeleteDialog}
				setOpen={setOpenDeleteDialog}
				afterDelete={() => window.location.reload()}
			/>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent>
				<ContextMenuItem>
					<PencilIcon className="mr-2" size={16} />
					Edit
				</ContextMenuItem>
				<ContextMenuItem onClick={() => setOpenDeleteDialog(true)}>
					<Trash className="mr-2" size={16} />
					Delete
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
};

const MyProblemMiniCard = ({
	problem,
}: {
	problem: ProblemPopulateTestcases;
}) => {
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
				onClick={() => navigate(`/my/problems/${problem.problem_id}`)}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				className={`pt-6 px-5 cursor-pointer ${
					highlightTitle ? "border-green-500 bg-green-100" : ""
				}`}
			>
				<CardContent>
					<div className="flex items-stretch justify-between">
						<div className="flex items-center w-1/2">
							<FileSpreadsheet className="text-blue-400 mr-2" />
							{!highlightTitle && (
								<h1 className="	font-bold">{problem.title}</h1>
							)}
							{highlightTitle && (
								<h1 className="font-bold text-green-600">
									{problem.title}
								</h1>
							)}
						</div>

						<div className="flex gap-1 text-sm font-medium self-center">
                            <Tooltip>
                                <TooltipTrigger><Checkmark variant="circle" status/></TooltipTrigger>
                                <TooltipContent>Source Code</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger><Checkmark variant="circle" status/></TooltipTrigger>
                                <TooltipContent>Testcase</TooltipContent>
                            </Tooltip>
                            <Tooltip>
                                <TooltipTrigger><Checkmark variant="circle" status/></TooltipTrigger>
                                <TooltipContent>No Runtime Error</TooltipContent>
                            </Tooltip>
						
						</div>
					</div>
				</CardContent>
			</Card>
		</MyProblemContextMenu>
	);
};

export default MyProblemMiniCard;
