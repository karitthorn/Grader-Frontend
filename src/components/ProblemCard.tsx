import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import { Button } from "./shadcn/Button";
import { Check, CheckCircle2, X } from "lucide-react";

const ProblemCard = () => {

	const [highlightTitle, setHighlightTitle] = useState(false);
	const [toolVisible, setToolVisible] = useState(true);

	const handleMouseOver = () => {
		setHighlightTitle(true);
		setToolVisible(true);
	}

	const handleMouseOut = () => {
		setHighlightTitle(false);
		setToolVisible(false);
	}

	return (
		<Card
			// onMouseOver={handleMouseOver}
			// onMouseOut={handleMouseOut}
			className="pt-6 px-5"
		>
			{/* <div className="flex justify-between">
				<div>
					<CardTitle>Problem Name</CardTitle>
				</div>
			</div> */}
			<CardContent>
				<div className="flex justify-between">
					<div className="flex justify-between w-2/3 items-center">
						<h1 className={"font-bold " + (highlightTitle) ? "text-green-500" : ""}>Problem Name</h1>
						<div className="text-base text-gray-400">Last Updated: 12/34/2123</div>
						<div className="flex justify-between gap-5 text-base">
							<div className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-400" /> Source Code</div>
							<div className="flex items-center"><X className="mr-2 h-4 w-4 text-green-400" /> Testcases</div>
							<div className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-400" /> No Runtime Error</div>
						</div>
					</div>
					<div
						className={
							"flex gap-2 " + (toolVisible ? "" : "invisible")
						}
					>
						{/* <Button>View</Button>
						<Button>Edit</Button>
						<Button>Delete</Button> */}
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ProblemCard;
