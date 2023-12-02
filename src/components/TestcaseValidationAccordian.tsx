import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./shadcn/Accordion";
import { Label } from "./shadcn/Label";
import { Input } from "./shadcn/Input";
import { Textarea } from "./shadcn/Textarea";
import { RuntimeResult } from "../types/apis/Problem.api";
import { Files } from "lucide-react";
import { TestcaseStatusIndicatorColor } from "../constants/TestcaseStatusIndicatorColor";
import { TestcaseModel } from "../types/models/Problem.model";

const TestcaseValidationInstance = ({
	value,
	inputValue,
	outputValue,
	status,
}: {
	value: string;
	inputValue: string;
	outputValue: string;
	status: string;
}) => {
	// const [inputValue, setInputValue] = useState("1 2 3");
	// const [outputValue, setOutputValue] = useState("Hello World!");

	return (
		<AccordionItem value={value}>
			<AccordionTrigger>Testcase #{value}</AccordionTrigger>
			<AccordionContent>
				<div className="flex gap-5 pl-1">
					<div className="w-5/12">
						<Label>Input</Label>
						<Textarea rows={inputValue.split('\n').length} readOnly className="mt-1 font-mono cursor-pointer" value={inputValue} onClick={() => navigator.clipboard.writeText(inputValue)}/>
					</div>
					<div className="w-5/12">
						<Label>Output</Label>
						<Textarea rows={outputValue.split('\n').length} readOnly className="mt-1 font-mono cursor-pointer" value={outputValue} onClick={() => navigator.clipboard.writeText(outputValue)}/>
					</div>
					<div className="w-2/12">
						<Label>Runtime Status</Label>
						<p className={"text-xl font-bold text-green-400 " + TestcaseStatusIndicatorColor[status as TestcaseGradingResultStatus]}>{status}</p>
					</div>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
};

const TestcaseValidationAccordian = ({runtimeResults=[]}:{
	runtimeResults?: RuntimeResult[] | TestcaseModel[]
}) => {
	return (
		<Accordion type="multiple">
			{runtimeResults?.map((result, index) => (
				<TestcaseValidationInstance
					key={index}
					value={String(index + 1)}
					inputValue={result.input}
					outputValue={result.output}
					status={result.runtime_status ? result.runtime_status : "OK"}
				/>
			))}
		</Accordion>
	);
};

export default TestcaseValidationAccordian;
