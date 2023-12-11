import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import TestcasesGradingIndicator from "./TestcasesGradingIndicator";
import { ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Problem.model";
import { readableDateFormat } from "../utilities/ReadableDateFormat";
import { Button } from "./shadcn/Button";
import { Label } from "./shadcn/Label";
import { useNavigate } from "react-router-dom";
import { FileSpreadsheet, Puzzle } from "lucide-react";

const PublicProblemCard = ({
	problem,
}: {
	problem: ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel;
}) => {
	const navigate = useNavigate();
	const [isHovering, setIsHovering] = useState(false);

	return (
		<Card
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			className={`pt-6 px-5 cursor-pointer ${
				isHovering ? "border-green-500 bg-green-100" : ""
			}`}
		>
			<CardContent>
				<div>
					<div className="flex items-center">
						<FileSpreadsheet className="text-blue-400 mr-2" />
						<h1
							className={`font-bold ${
								isHovering ? "text-green-600" : ""
							}`}
						>
							{problem.title}
						</h1>
					</div>
					<div className="flex items-stretch">
						<div className="w-2/12">
							<div className="">
								<Label>Author</Label>
							</div>
							<div className="leading-3 text-gray-400">
								<Label>{problem.creator.username}</Label>
							</div>
						</div>
						<div className="w-3/12">
							<div className="">
								<Label>Updated Date</Label>
							</div>
							<div className="leading-3 text-gray-400">
								<Label>
									{readableDateFormat(problem.updated_date)}
								</Label>
							</div>
						</div>
						<div
							className={`w-4/12 xxl:w-5/12 self-end ${
								problem.best_submission ? "" : "invisible"
							}`}
						>
							<Label>Best Submission</Label>
							<TestcasesGradingIndicator
								disableHover
								submissionTestcases={
									problem.best_submission?.runtime_output
								}
							/>
						</div>
						<div className="w-3/12 xxl:w-2/12 self-center">
							<Button
								onClick={() =>
									navigate(`/problems/${problem.problem_id}`)
								}
								color="secondary"
							>
								<Puzzle className="mr-2" />
								Solve This Problem
							</Button>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default PublicProblemCard;
