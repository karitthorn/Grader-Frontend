import {
	FileSpreadsheet
} from "lucide-react";
import { useState } from "react";
import {
	ProblemModel,
	ProblemPopulateTestcases,
	ProblemSecureModel
} from "../../../types/models/Problem.model";
import { onMiddleClickOpenInNewTab } from "../../../utilities/OnMiddleClickOpenInNewTab";
import MyProblemContextMenu from "../../ContextMenus/MyProblemContextMenu";
import { Card } from "../../shadcn/Card";

const MyProblemMiniCard2 = ({
	problem,
	disabled = false,
	disabledHighlight = false,
	onClick = () => {},
}: {
	problem: ProblemPopulateTestcases | ProblemSecureModel | ProblemModel;
	disabled?: boolean;
	disabledHighlight?: boolean;
	onClick?: () => void;
}) => {

	const [highlightTitle, setHighlightTitle] = useState(false);

	const handleMouseOver = () => {
		setHighlightTitle(true);
	};
	const handleMouseOut = () => {
		setHighlightTitle(false);
	};

	const customCardCSS = (): string => {
		let className = "p-2 cursor-pointer ";

		if (disabled) {
			className += "opacity-50 ";
		} else {
			if (highlightTitle && !disabledHighlight) {
				className += "border-green-500 bg-green-100 ";
			}
		}
		return className;
	};

	return (
		problem && (
			<MyProblemContextMenu problem={problem}>
				<Card
					onMouseDown={(e) => onMiddleClickOpenInNewTab(e,`/my/problems/${problem.problem_id}/edit`)}
					onClick={() => onClick()}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					className={customCardCSS()}

					// className={`pt-6 px-5 ${disabled ? "opacity-50" : }`}`}
				>
					<div className="flex items-center justify-between font-medium text-base ">
						<div className="flex items-center w-full">
							<FileSpreadsheet
								size={20}
								className="text-blue-400 mr-2"
							/>
							<p className="font-mono line-clamp-1 w-4/5">{problem.title}</p>
						</div>
						{/* <div className="bg-blue-600 w-4 h-4 text-center text-white rounded-full text-xs">
							{collection.problems.length}
						</div> */}
					</div>
				</Card>
			</MyProblemContextMenu>
		)
	);
};

export default MyProblemMiniCard2;
