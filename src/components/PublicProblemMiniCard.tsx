import React from "react";
import { Card } from "./shadcn/Card";
import { ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Problem.model";
import { FileSpreadsheet, Puzzle } from "lucide-react";
import TestcasesGradingIndicator from "./TestcasesGradingIndicator";
import { Button } from "./shadcn/Button";

const PublicProblemMiniCard = ({
	problem,
}: {
	problem: ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel;
}) => {
	return (
		<Card className="px-5 cursor-pointer py-2">
			<div className="flex items-center">
				<h1 className="font-bold flex items-center w-3/12">
					<FileSpreadsheet className="text-blue-400 mr-2" />
					{problem?.title}
				</h1>

				{/* <div className="flex w-2/12">
					<p className="font-medium mr-2">Created by</p>
					<p className="font-medium text-gray-400">
						{problem.creator.username}
					</p>
				</div> */}

				<div className="flex w-5/12">
					<p className="font-medium mr-2">Best Submission</p>
					{problem.best_submission ? (
						<TestcasesGradingIndicator
							submissionTestcases={
								problem.best_submission.runtime_output
							}
						/>
					) : (
						"-"
					)}
				</div>

				<div>
					<Button
						// onClick={() =>
						// 	navigate(`/problems/${problem.problem_id}`)
						// }
						// className="bg-white border-green-500 border-2 text-green-500 hover:bg-green-500 hover:text-white"
					>
						<Puzzle className="mr-2" />
						Solve This Problem
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default PublicProblemMiniCard;
