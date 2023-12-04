import React, { useEffect, useState } from "react";
import { CreateRequestForm } from "../../../types/forms/CreateRequestForm";
import { ValidateProgramResponse } from "../../../types/apis/Problem.api";
import { ProblemService } from "../../../services/Problem.service";
import {
	testcaseParse,
	testcasesStringify,
} from "../../../utilities/TestcaseFormat";
import { Label } from "@radix-ui/react-label";
import { Combobox } from "../../shadcn/Combobox";
import { ProgrammingLanguageOptions } from "../../../constants/ProgrammingLanguage";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { Input } from "../../shadcn/Input";
import { Button } from "../../shadcn/Button";
import TestcaseValidationAccordian from "../../TestcaseValidationAccordian";
import { Separator } from "../../shadcn/Seperator";

const Scoring = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateRequestForm;
	setCreateRequest: React.Dispatch<React.SetStateAction<CreateRequestForm>>;
}) => {
	const [loading, setLoading] = useState(false);
	const [displayResult, setDisplayResult] = useState(false);

	const [delimeter, setDelimeter] = useState(":::");
	const [selectedLanguage, setSelectedLanguage] = useState("python");

	const [validationResult, setValidationResult] =
		useState<ValidateProgramResponse>();

	const handleValidation = () => {
		// setLoading(true);

		// console.log({
		// 	og: createRequest.testcases,
		// 	testcaseFormat: testcaseFormat(createRequest.testcases)
		// });
		ProblemService.validateProgram({
			source_code: createRequest.solution.replace(/\r\n/g, "\n"),
			testcases: testcaseParse(
				createRequest.testcases,
				createRequest.testcase_delimeter
			),
			time_limited: createRequest.time_limit,
			language: selectedLanguage,
		}).then((response) => {
			console.log(response.data);
			setValidationResult(response.data);
			setDisplayResult(true);
		});
	};

	useEffect(() => {
		console.log(selectedLanguage);
	}, [selectedLanguage]);

	return (
		<div className="flex">
			<div className="w-1/2 h-[80vh] overflow-y-scroll">
				<div className="flex justify-between mb-1">
					<div>
						<Label>Source Code</Label>
					</div>
					<div>
						<Combobox
							label="Select Language"
							options={ProgrammingLanguageOptions}
							onSelect={(value) =>
								setCreateRequest({
									...createRequest,
									language: value,
								})
							}
							initialValue={selectedLanguage}
							value={selectedLanguage}
							setValue={setSelectedLanguage}
						/>
					</div>
				</div>
				<MonacoEditor
					theme="vs-dark"
					height="35vh"
					defaultLanguage="python"
					value={createRequest.solution}
					onChange={(e) =>
						setCreateRequest({
							...createRequest,
							solution: String(e),
						})
					}
					language={createRequest.language}
				/>

				<div className="my-1 flex justify-between items-center">
					<Label className="">Testcases</Label>
					<div className="flex w-1/2 items-center">
						<Label className="mr-3">
							Delimeter (For seperate each testcase)
						</Label>
						<Input
							className="w-1/2"
							value={createRequest.testcase_delimeter}
							onChange={(e) =>
								setCreateRequest({
									...createRequest,
									testcase_delimeter: e.target.value,
								})
							}
						/>
					</div>
				</div>
				<MonacoEditor
					value={createRequest.testcases}
					onChange={(e) =>
						setCreateRequest({
							...createRequest,
							testcases: String(e),
						})
					}
					theme="vs-dark"
					height="35vh"
					defaultLanguage="python"
				/>
			</div>
			<div className="h-[80vh]">
				<Separator className="mx-2" orientation="vertical" />
			</div>

			<div className="w-1/2">
				{!displayResult && (
					<div className="m-auto">
						{!loading ? (
							<Button
								onClick={handleValidation}
								className="px-10"
							>
								Validate
							</Button>
						) : (
							<h1>Validation ...</h1>
						)}
					</div>
				)}

				{((displayResult && validationResult) || (createRequest.validated_testcases)) && (
					<div className="wrap w-full">
						<div className="pr-5 h-[80vh] md:h-[70vh] overflow-y-scroll">
							<TestcaseValidationAccordian
								runtimeResults={
									validationResult?.runtime_results ?
									validationResult.runtime_results :
									createRequest.validated_testcases
								}
							/>
						</div>
						<div className="flex justify-end mt-5">
							<Button
								onClick={handleValidation}
								className="px-10"
							>
								Validate Again
							</Button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Scoring;
