import { FileSpreadsheet } from "lucide-react";
import { useState } from "react";
import {
	ProblemModel,
	ProblemPopulateTestcases
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
	problem: ProblemPopulateTestcases | ProblemModel;
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
					onMouseDown={(e) =>
						onMiddleClickOpenInNewTab(
							e,
							`/my/problems/${problem.problem_id}/edit`
						)
					}
					onClick={() => onClick()}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
					className={customCardCSS()}

					// className={`pt-6 px-5 ${disabled ? "opacity-50" : }`}`}
				>
					<div className="flex items-center font-medium text-base ">
						<div className="flex items-center w-4/12">
							<FileSpreadsheet
								size={20}
								className="text-blue-400 mr-2"
							/>
						
								<p className="font-mono line-clamp-1 w-5/6">
									{problem.title}
								</p>
						</div>
						{/* <div className="font-medium flex items-center w-1/12">
							<Tally4 className="text-green-400 mr-2" size={20} />
							<div>{problem.testcases.length}</div>
						</div>
						<div className="flex items-center w-3/12">
							<CheckBadge
								noIcon
								checked={problem.solution !== ""}
							>
								SC
							</CheckBadge>
							<CheckBadge
								className="mx-1"
								noIcon
								checked={problem.testcases.length > 0}
							>
								TC
							</CheckBadge>
							<CheckBadge
								noIcon
								checked={checkRuntimeStatus(problem.testcases)}
							>
								NRE
							</CheckBadge>
						</div>
						<div className="font-medium">
							{problem.allowed_languages
								.split(",")
								.map((lang, index) => {
									if (index < 3) {
										return ProgrammingLanguageOptions.find(
											(option) => option.value === lang
										)?.badge;
									} else if (index === 3) {
										return <span>...</span>;
									}
								})}
						</div> */}
					</div>
				</Card>
			</MyProblemContextMenu>
		)
	);
};

export default MyProblemMiniCard2;
