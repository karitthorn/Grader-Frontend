import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import { Button } from "./shadcn/Button";
import { Check, CheckCircle2, X } from "lucide-react";

const ProblemCard = ({ title }: { title: string }) => {
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
		<Card
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className="pt-6 px-5"
		>
			{/* <div className="flex justify-between">
				<div>
					<CardTitle>Problem Name</CardTitle>
				</div>
			</div> */}
			<CardContent>
				<div className="flex justify-between cursor-pointer">
					<div className="flex w-5/6 items-center">
						<div className="w-1/3">
							{!highlightTitle && (
								<h1 className="	font-bold">{title}</h1>
							)}
							{highlightTitle && (
								<h1 className="font-bold text-green-900 underline underline-offset-2">
									{title}
								</h1>
							)}
						</div>

						<div className="text-base text-gray-400 w-1/3">
							Last Updated: 12/34/2123
						</div>
						<div className="flex justify-between gap-5 text-base">
							<div className="flex items-center">
								<Check className="mr-2 h-4 w-4 text-green-400" />{" "}
								Source Code
							</div>
							<div className="flex items-center">
								<X className="mr-2 h-4 w-4 text-green-400" />{" "}
								Testcases
							</div>
							<div className="flex items-center">
								<Check className="mr-2 h-4 w-4 text-green-400" />{" "}
								No Runtime Error
							</div>
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
