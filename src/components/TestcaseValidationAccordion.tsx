import { TestcaseStatusIndicatorColor } from "../constants/TestcaseStatusIndicatorColor";
import { RuntimeResult } from "../types/apis/Problem.api";
import { TestcaseModel } from "../types/models/Problem.model";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./shadcn/Accordion";
import { Badge } from "./shadcn/Badge";
import { Label } from "./shadcn/Label";
import { Textarea } from "./shadcn/Textarea";

const TestcaseValidationInstance = ({
	value,
	inputValue,
	outputValue,
	status,
}: {
	value: string;
	inputValue: string;
	outputValue: string | null;
	status: string;
}) => {
	// const [inputValue, setInputValue] = useState("1 2 3");
	// const [outputValue, setOutputValue] = useState("Hello World!");

	// useEffect(() => {
	// 	console.log(inputValue, outputValue, status);
	// }, [outputValue]);

	return (
		<AccordionItem value={value}>
			<AccordionTrigger>
				Testcase #{value}
				{status === "OK" ? (
					<Badge className="bg-green-400">OK</Badge>
				) : status === "ERROR" ? (
					<Badge className="bg-red-400">ERROR</Badge>
				) : status === "TIMEOUT" ? (
					<Badge className="bg-yellow-400">TIMEOUT</Badge>
				) : (
					<Badge className="bg-red-400">FAILED</Badge>
				)}
			</AccordionTrigger>
			<AccordionContent>
				<div className="flex gap-5 pl-1">
					<div className="w-5/12">
						<Label>Input</Label>
						<Textarea
							rows={inputValue?.split("\n").length}
							readOnly
							className="mt-1 font-mono cursor-pointer"
							value={inputValue}
							onClick={() =>
								navigator.clipboard.writeText(inputValue)
							}
						/>
					</div>
					<div className="w-5/12">
						<Label>Output</Label>
						<Textarea
							rows={outputValue?.split("\n").length}
							readOnly
							className="mt-1 font-mono cursor-pointer"
							value={outputValue ?? ""}
							onClick={() =>
								navigator.clipboard.writeText(outputValue ?? "")
							}
						/>
					</div>
					<div className="w-2/12">
						<Label>Runtime Status</Label>
						<p
							className={`text-xl font-bold text-${
								TestcaseStatusIndicatorColor[
									status as TestcaseGradingResultStatus
								]
							}`}
						>
							{status}
						</p>
					</div>
				</div>
			</AccordionContent>
		</AccordionItem>
	);
};

const TestcaseValidationAccordian = ({
	runtimeResults = [],
}: {
	runtimeResults?: RuntimeResult[] | TestcaseModel[];
}) => {
	return (
		<Accordion type="multiple">
			{runtimeResults?.map((result, index) => (
				<TestcaseValidationInstance
					key={index}
					value={String(index + 1)}
					inputValue={result.input}
					outputValue={result.output}
					status={
						result.runtime_status ? result.runtime_status : "OK"
					}
				/>
			))}
		</Accordion>
	);
};

export default TestcaseValidationAccordian;
