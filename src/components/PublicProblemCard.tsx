import React from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import TestcasesGradingIndicator from "./TestcasesGradingIndicator";
import { ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Problem.model";
import { readableDateFormat } from "../utilities/ReadableDateFormat";
import { Button } from "./shadcn/Button";
import { Label } from "./shadcn/Label";

const PublicProblemCard = ({
	problem,
}: {
	problem: ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel;
}) => {
	return (
		<Card className="pt-6 px-5">
			<CardContent>
				{/* <div className="flex items-center">
					<div className="w-1/6">
						<h1 className="font-bold">{problem.title}</h1>
					</div>

					<div className="text-base w-1/6">{problem.creator.username}</div>
					<div className="text-base w-1/6">
						{readableDateFormat(problem.updated_date)}
					</div>
					<div className="flex justify-end w-2/6">
						<TestcasesGradingIndicator
							disableHover
							submissionTestcases={
								problem.best_submission?.runtime_output
							}
						/>
					</div>

          <div className="flex justify-end w-1/6">
							<Button>Solve This Problem</Button>
          </div>
				</div> */}
				<div>
					<h1 className="font-bold">{problem.title}</h1>
					<div className="flex">
						<div className="w-1/6">
							<div>
								<Label>Author</Label>
							</div>
							<div className="leading-3">
								<Label>{problem.creator.username}</Label>
							</div>
						</div>
						<div>
							<div>
								<Label>Updated Date</Label>
							</div>
							<div className="leading-3">
								<Label>{readableDateFormat(problem.updated_date)}</Label>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default PublicProblemCard;
