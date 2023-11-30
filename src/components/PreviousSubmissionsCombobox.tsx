"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../lib/utils";
import { Button } from "./shadcn/Button";
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from "./shadcn/Command";
import { Popover, PopoverContent, PopoverTrigger } from "./shadcn/Popover";
import TestcasesGradingIndicator from "./TestcasesGradingIndicator";
import {
	GetSubmissionByAccountProblemSubmissionModel,
	SubmissionTestcaseSecureModel,
} from "../types/models/Submission.model";
import { readableDateFormat } from "../utilities/ReadableDateFormat";
import { TestcaseStatusIndicatorColor } from "../constants/TestcaseStatusIndicatorColor";
import { Separator } from "./shadcn/Seperator";

const TestcaseGradingMiniResult = ({
	status,
}: {
	status: TestcaseGradingResultStatus;
}) => {
	return (
		<div
			className={
				"px-1 py-2 cursor-pointer " +
				"bg-" +
				TestcaseStatusIndicatorColor[status]
			}
		></div>
	);
};

const TestcasesGradingMiniIndicator = ({
	submissionTestcases,
}: {
	submissionTestcases?: SubmissionTestcaseSecureModel[];
}) => {
	return (
		<div className="flex gap-0.5 items-center">
			{submissionTestcases?.map((testcase, index) => (
				<TestcaseGradingMiniResult
					key={index}
					status={
						testcase.runtime_status as TestcaseGradingResultStatus
					}
				/>
			))}
		</div>
	);
};

export function PreviousSubmissionsCombobox({
	submissions = [],
	bestSubmission,
	onSelect,
}: {
	submissions: GetSubmissionByAccountProblemSubmissionModel[];
	bestSubmission: GetSubmissionByAccountProblemSubmissionModel;
	onSelect?: (value: string) => void;
}) {
	const [open, setOpen] = React.useState(false);
	const [value, setValue] = React.useState("");

	const bestOptions = {
		label: (
			<div className="w-full">
				<div className="flex justify-between items-center">
					<div>
						{readableDateFormat(bestSubmission?.date)}
					</div>
					<div>
						<TestcasesGradingMiniIndicator
							submissionTestcases={bestSubmission?.runtime_output}
						/>
					</div>
				</div>
			</div>
		),
		value: String(bestSubmission?.submission_id),
	};

	const options = submissions.map(
		(submission) => ({
			label: (
				<div className="w-full">
					<div className="flex justify-between items-center">
						<div>
							{readableDateFormat(submission?.date)}{" "}
						</div>
						<div>
							<TestcasesGradingMiniIndicator
								submissionTestcases={submission?.runtime_output}
							/>
						</div>
					</div>
				</div>
			),
			value: String(submission?.submission_id),
		})
	);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					role="combobox"
					aria-expanded={open}
					className="w-[500px] justify-between"
				>
					{value
						? options.find((framework) => framework.value === value)
								?.label
						: "Previous Submission"}
					<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-[500px] p-0">
				<Command>
					<CommandInput
						placeholder={"Select Previous Submissions ..."}
					/>
					<CommandEmpty>{"Not found"}</CommandEmpty>
                    <div className="mt-2 ml-2 text-sm font-bold">Best Submission</div>
					<CommandGroup className="">
						<CommandItem
							key={bestOptions.value}
							value={bestOptions.value}
							onSelect={(currentValue) => {
								if (onSelect) {
									onSelect(currentValue);
								}
								// setValue(currentValue === value ? "" : currentValue)
								setValue(currentValue);
								setOpen(false);
							}}
						>
							<Check
								className={cn(
									"mr-2 h-4 w-4 text-green-400",
									value === bestOptions.value
										? "opacity-100"
										: "opacity-0"
								)}
							/>

							{bestOptions.label}
						</CommandItem>
					</CommandGroup>
                    <Separator/>
					<CommandGroup className="h-[50vh] overflow-y-scroll">
						{options.map((framework, index) => (
							<CommandItem
								key={framework.value}
								value={framework.value}
								onSelect={(currentValue) => {
									if (onSelect) {
										onSelect(currentValue);
									}
									// setValue(currentValue === value ? "" : currentValue)
									setValue(currentValue);
									setOpen(false);
								}}
							>
								<Check
									className={cn(
										"mr-2 h-4 w-4 text-green-400",
										value === framework.value
											? "opacity-100"
											: "opacity-0"
									)}
								/>

								{framework.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

export default PreviousSubmissionsCombobox;
