import React, { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "../../shadcn/Card";
import { Button } from "../../shadcn/Button";
import {
	Check,
	CheckCircle2,
	FileSpreadsheet,
	Folder,
	Pencil,
	PencilIcon,
	Trash,
	User,
	Users,
	X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
	ProblemModel,
	ProblemPopulateTestcases,
	ProblemSecureModel,
	TestcaseModel,
} from "../../../types/models/Problem.model";
import { readableDateFormat } from "../../../utilities/ReadableDateFormat";
import {
	ContextMenu,
	ContextMenuTrigger,
	ContextMenuContent,
	ContextMenuItem,
} from "../../shadcn/ContextMenu";
import DeleteProblemConfirmationDialog from "../../DeleteProblemConfirmationDialog";
import Checkmark from "../../Checkmark";
import { Tooltip, TooltipContent, TooltipTrigger } from "../../shadcn/Tooltip";
import { CollectionModel, CollectionPopulateProblemSecureModel } from "../../../types/models/Collection.model";
import { AccountModel, AccountSecureModel } from "../../../types/models/Account.model";

const AccountMiniCard = ({
	// problem,
    account,
	disabled=false,
	disabledHighlight=false,
	onClick=()=>{}
}: {
	// problem: ProblemPopulateTestcases | ProblemSecureModel | ProblemModel;
    account: AccountModel | AccountSecureModel;
	disabled?: boolean;
	disabledHighlight?: boolean;
	onClick?: () => void;
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

	const customCardCSS = ():string => {
		let className = "py-3 px-5 cursor-pointer ";

		if (disabled) {
			className += "opacity-50 ";
		}
		else{
			if (highlightTitle && !disabledHighlight) {
				className += "border-green-500 bg-green-100 ";
			}
		} 
		return className;
	}

	return (
		account && (
			// <MyCollectionContextMenu problem={problem}>
			<Card
				onClick={() => onClick()}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				className={customCardCSS()}

				// className={`pt-6 px-5 ${disabled ? "opacity-50" : }`}`}
			>
				{/* <CardContent> */}
					<div className="flex items-stretch justify-between">
						<div className="flex items-center w-1/2">
							<User className="text-red-400 mr-2" />
							{(!highlightTitle || disabled || disabledHighlight) && (
								<h1 className="	font-bold">{account.username}</h1>
							)}
							{(highlightTitle && !disabled && !disabledHighlight) && (
								<h1 className="font-bold text-green-600">
									{account.username}
								</h1>
							)}
						</div>
					</div>
				{/* </CardContent> */}
			</Card>
		// </MyCollectionContextMenu>
		)
	);
};

export default AccountMiniCard;
