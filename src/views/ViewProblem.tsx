import React, { useEffect, useState } from "react";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import { useParams } from "react-router-dom";
import { Separator } from "../components/shadcn/Seperator";
import PlateEditor from "../components/PlateEditor";
import ReadOnlyPlate from "../components/ReadOnlyPlate";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import { Label } from "../components/shadcn/Label";
import { Combobox } from "../components/shadcn/Combobox";
import { ProgrammingLanguageOptions } from "../constants/ProgrammingLanguage";
import { Button } from "../components/shadcn/Button";
import TestcasesGradingIndicator from "../components/TestcasesGradingIndicator";
import { styled } from "styled-components";
import { ProblemService } from "../services/Problem.service";
import { ProblemPoplulateCreatorModel } from "../types/models/Problem.model";
import { SubmissionService } from "../services/Submission.service";
import {
	GetSubmissionByAccountProblemResponse,
	SubmissionModel,
} from "../types/models/Submission.model";
import { SubmitProblemResponse } from "../types/apis/Submission.api";
import PreviousSubmissionsCombobox from "../components/PreviousSubmissionsCombobox";
import { SubmitProblemResponse2GetSubmissionByAccountProblemResponse } from "../types/models/adapters/Submission.adapter";

const ViewProblem = () => {
	const { problemId } = useParams();
	const accountId = Number(localStorage.getItem("account_id"));

	const [selectedLanguage, setSelectedLanguage] = useState("python");
	const [problem, setProblem] = useState<ProblemPoplulateCreatorModel>();
	const [previousSubmissions, setPreviousSubmissions] =
		useState<GetSubmissionByAccountProblemResponse>();

	const [grading, setGrading] = useState<boolean>(false);
	const [submitCodeValue, setSubmitCodeValue] = useState<any>(
		""
	);
	const [lastedSubmission, setLastedSubmission] =
		useState<GetSubmissionByAccountProblemResponse>();

	const handleSelectPreviousSubmission = (submissionId:number) => {
		let submission = null
		if (submissionId === previousSubmissions?.best_submission?.submission_id) {
			submission = previousSubmissions?.best_submission
		}
		else {

			previousSubmissions?.submissions?.forEach((sub) => {
				if (sub.submission_id === submissionId) {
					submission = sub
					return
				}
			})
		}

		if (submission) {
			setSubmitCodeValue(submission.submission_code)
			setLastedSubmission(submission)
		}
	}

	useEffect(() => {
		ProblemService.get(Number(problemId)).then((response) => {
			setProblem(response.data);
		});

		SubmissionService.getByAccountProblem(
			accountId,
			Number(problemId)
		).then((response) => {
			setPreviousSubmissions(response.data);
		});
	}, []);

	const handleSubmit = () => {
		setGrading(true);
		SubmissionService.submit(accountId, Number(problemId), {
			submission_code: String(submitCodeValue),
		}).then((response) => {
			const submission = SubmitProblemResponse2GetSubmissionByAccountProblemResponse(response.data)
			setLastedSubmission(submission);
			setGrading(false);
		});
	};

	return (
		<NavbarMenuLayout xPad={false}>
			<div className="flex xxl:mt-10 md:mt-5">
				<div className="w-1/2">
					<ReadOnlyPlate
						value={problem?.description}
						className="xl:h-[85vh] md:h-[75vh]"
					/>
				</div>
				<div className="mx-3">
					<Separator orientation="vertical" />
				</div>
				<div className="w-1/2 mr-5">
					<div className="flex justify-between mb-1 items-center">
						<div className="flex gap-2">
							<Combobox
								label="Select Language"
								options={ProgrammingLanguageOptions}
								onSelect={(value) => setSelectedLanguage(value)}
								initialValue={selectedLanguage}
							/>
						</div>
						<div>
							{lastedSubmission && !grading && (
								<TestcasesGradingIndicator
									submissionTestcases={
										lastedSubmission.runtime_output
									}
								/>
							)}
						</div>
					</div>
					<div className="">
						<MonacoEditorWrapper>
							<MonacoEditor
								onChange={(e) => setSubmitCodeValue(e)}
								value={submitCodeValue}
								theme="vs-dark"
								defaultLanguage="python"
								language={selectedLanguage}
							/>
						</MonacoEditorWrapper>
					</div>

					<div className="flex justify-between mt-1">
						<PreviousSubmissionsCombobox
							bestSubmission={
								previousSubmissions?.best_submission
							}
							submissions={previousSubmissions?.submissions}
							onSelect={(submissionId) => handleSelectPreviousSubmission(Number(submissionId))}
						/>
						<Button
							disabled={grading || !submitCodeValue}
							onClick={handleSubmit}
							className="px-10"
						>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</NavbarMenuLayout>
	);
};

const MonacoEditorWrapper = styled.div`
	height: 80vh;

	@media (max-height: 900px) {
		height: 75vh;
	}
`;
export default ViewProblem;
