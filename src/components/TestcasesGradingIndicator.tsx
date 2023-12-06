import React from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "./shadcn/HoverCard";
import { SubmissionTestcaseSecureModel } from "../types/models/Submission.model";
import { TestcaseStatusIndicatorColor } from "../constants/TestcaseStatusIndicatorColor";

type TestcaseGradingResultStatus = "OK" | "TIMEOUT" | "ERROR" | "FAILED"

const TestcaseGradingResult = ({ no,status,disableHover=false }: {
	no: number | string;
	status: "OK" | "TIMEOUT" | "ERROR" | "FAILED";
	disableHover?: boolean;
}) => {

	const ColorMap = TestcaseStatusIndicatorColor

	return (
		<HoverCard>
			<HoverCardTrigger>
				{status === "OK" && <div className={"px-2 py-4 cursor-pointer " + 'bg-green-400'}></div>}
				{status === "TIMEOUT" && <div className={"px-2 py-4 cursor-pointer " + 'bg-yellow-400'}></div>}
				{status === "ERROR" && <div className={"px-2 py-4 cursor-pointer " + 'bg-red-400'}></div>}
				{status === "FAILED" && <div className={"px-2 py-4 cursor-pointer " + 'bg-zinc-300'}></div>}
			</HoverCardTrigger>
			{!disableHover && <HoverCardContent>
        		<p className="font-bold">Testcase #{no}</p>
				<p className="font-bold">Status: <span className={'text-' + ColorMap[status]}>{status}</span></p>
				<p className="font-bold text-sm">Time Used: <span className="font-normal">1.234 seconds</span></p>
			</HoverCardContent>}
		</HoverCard>
	);
};

const TestcasesGradingIndicator = ({submissionTestcases,disableHover=false}: {
	submissionTestcases?: SubmissionTestcaseSecureModel[];
	disableHover?: boolean;
}) => {
	return (
		<div className="flex gap-0.5 items-center">
			{
				submissionTestcases?.map((testcase,index) => (
					<TestcaseGradingResult disableHover={disableHover} key={index} no={index+1} status={testcase.runtime_status as TestcaseGradingResultStatus} />
				))	
			}
		</div>
	);
};

export default TestcasesGradingIndicator;
