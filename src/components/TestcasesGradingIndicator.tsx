import React from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "./shadcn/HoverCard";

const TestcaseGradingResult = () => {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<div className="bg-green-400 px-2 py-4 cursor-pointer"></div>
			</HoverCardTrigger>
			<HoverCardContent>
        <p className="font-bold">Testcase #1</p>
				<p className="font-bold">Status: <span className="text-green-400">OK</span></p>
				<p className="font-bold text-sm">Time Used: <span className="font-normal">1.234 seconds</span></p>
			</HoverCardContent>
		</HoverCard>
	);
};

const TestcasesGradingIndicator = () => {
	return (
		<div className="flex gap-0.5 items-center">
			<TestcaseGradingResult />
			<TestcaseGradingResult />
			<TestcaseGradingResult />
			<TestcaseGradingResult />
			<TestcaseGradingResult />
			<TestcaseGradingResult />
			<TestcaseGradingResult />
			<TestcaseGradingResult />
			<TestcaseGradingResult />
			<TestcaseGradingResult />
		</div>
	);
};

export default TestcasesGradingIndicator;
