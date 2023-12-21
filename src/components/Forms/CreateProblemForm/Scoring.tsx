import React, { useEffect, useState } from "react";
import { CreateProblemRequestForm } from "../../../types/forms/CreateProblemRequestForm";
import { ValidateProgramResponse } from "../../../types/apis/Problem.api";
import { ProblemService } from "../../../services/Problem.service";
import {
	testcaseParse,
	testcasesStringify,
} from "../../../utilities/TestcaseFormat";
import { Combobox } from "../../shadcn/Combobox";
import { ProgrammingLanguageOptions } from "../../../constants/ProgrammingLanguage";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { Input } from "../../shadcn/Input";
import { Button } from "../../shadcn/Button";
import TestcaseValidationAccordion from "../../TestcaseValidationAccordion";
import { Separator } from "../../shadcn/Seperator";
import { Label } from "../../shadcn/Label";
import { Loader2 } from "lucide-react";

const Scoring = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateProblemRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateProblemRequestForm>
	>;
}) => {
	const [loading, setLoading] = useState(false);
	const [displayResult, setDisplayResult] = useState(false);

	const [delimeter, setDelimeter] = useState(":::");
	const [selectedLanguage, setSelectedLanguage] = useState("python");

	const [validationResult, setValidationResult] =
		useState<ValidateProgramResponse>();

	const handleValidation = () => {
		setLoading(true);

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
			setLoading(false);
		});
	};

	useEffect(() => {
		console.log(selectedLanguage);
	}, [selectedLanguage]);

	return (
		<div className="flex h-[80vh]">
			<div className="w-1/2  overflow-y-scroll">
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
					<Label className="">Testcase</Label>
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
			<div className="">
				<Separator className="mx-2" orientation="vertical" />
			</div>

			<div className="w-1/2 grid content-between">
				<div className="pr-5 overflow-y-scroll h-[70vh]">
					{((displayResult && validationResult) ||
						createRequest.validated_testcases) && (
						<TestcaseValidationAccordion
							runtimeResults={
								validationResult?.runtime_results
									? validationResult.runtime_results
									: createRequest.validated_testcases
							}
						/>
					)}
				</div>
				<div className="flex justify-end">
					<Button disabled={loading} onClick={handleValidation} className="px-10">
						{
							loading ? (
								<>
								<Loader2 className="animate-spin mr-2"/>
								Validating
								</>
							) : (
								<>
								Validate
								</>
							)
						}
						
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Scoring;
