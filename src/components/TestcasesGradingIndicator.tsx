import React from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "./shadcn/HoverCard";
import { SubmissionTestcaseSecureModel } from "../types/models/Submission.model";
import { TestcaseStatusIndicatorColor } from "../constants/TestcaseStatusIndicatorColor";

type TestcaseGradingResultStatus = "OK" | "TIMEOUT" | "ERROR" | "FAILED"

const TestcaseGradingResult = ({ no,status }: {
	no: number | string;
	status: "OK" | "TIMEOUT" | "ERROR" | "FAILED";
}) => {

	const ColorMap = TestcaseStatusIndicatorColor

	return (
		<HoverCard>
			<HoverCardTrigger>
				<div className={"px-2 py-4 cursor-pointer " + 'bg-' + ColorMap[status]}></div>
			</HoverCardTrigger>
			<HoverCardContent>
        <p className="font-bold">Testcase #{no}</p>
				<p className="font-bold">Status: <span className={'text-' + ColorMap[status]}>{status}</span></p>
				<p className="font-bold text-sm">Time Used: <span className="font-normal">1.234 seconds</span></p>
			</HoverCardContent>
		</HoverCard>
	);
};

const TestcasesGradingIndicator = ({submissionTestcases}: {
	submissionTestcases?: SubmissionTestcaseSecureModel[];
}) => {
	return (
		<div className="flex gap-0.5 items-center">
			{
				submissionTestcases?.map((testcase,index) => (
					<TestcaseGradingResult key={index} no={index+1} status={testcase.runtime_status as TestcaseGradingResultStatus} />
				))	
			}
		</div>
	);
};

export default TestcasesGradingIndicator;
