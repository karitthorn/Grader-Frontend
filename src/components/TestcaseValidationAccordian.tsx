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

const TestcaseValidationInstance = ({value} : {
    value: string
}) => {

	const [inputValue, setInputValue] = useState("1 2 3");
	const [outputValue, setOutputValue] = useState("Hello World!");

	return (
		<AccordionItem value={value}>
			<AccordionTrigger>Testcase #1</AccordionTrigger>
			<AccordionContent>
				<div className="flex gap-5">
					<div className="w-5/12">
						<Label>Input</Label>
						<Input className="mt-1" value={inputValue} />
					</div>
					<div className="w-5/12">
						<Label>Output</Label>
						<Input className="mt-1" value={outputValue} />
					</div>
					<div className="w-2/12">
						<Label>Runtime Status</Label>
						<p className="text-xl font-bold">OK</p>
					</div>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
};

const TestcaseValidationAccordian = () => {
	return <Accordion type="multiple">
        <TestcaseValidationInstance value="1"/>
        <TestcaseValidationInstance value="2"/>
        <TestcaseValidationInstance value="3"/>
        <TestcaseValidationInstance value="4"/>
		<TestcaseValidationInstance value="5"/>
		<TestcaseValidationInstance value="6"/>
		<TestcaseValidationInstance value="7"/>
		<TestcaseValidationInstance value="8"/>
		<TestcaseValidationInstance value="9"/>

    </Accordion>;
};

export default TestcaseValidationAccordian;
