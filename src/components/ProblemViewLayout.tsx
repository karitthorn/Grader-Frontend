import { ArrowLeft, Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { readableDateFormat } from "../utilities/ReadableDateFormat";
import { ProblemPoplulateCreatorModel } from "../types/models/Problem.model";
import ReadOnlyPlate from "./ReadOnlyPlate";
import { handleDeprecatedDescription } from "../utilities/HandleDeprecatedDescription";
import { Separator } from "./shadcn/Seperator";
import { Combobox } from "./shadcn/Combobox";
import { ProgrammingLanguageOptions } from "../constants/ProgrammingLanguage";
import TestcasesGradingIndicator from "./TestcasesGradingIndicator";
import { GetSubmissionByAccountProblemResponse, SubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Submission.model";
import styled from "styled-components";
import { Button } from "./shadcn/Button";
import PreviousSubmissionsCombobox from "./PreviousSubmissionsCombobox";
import { Editor as MonacoEditor } from "@monaco-editor/react";

export type OnSubmitProblemViewLayoutCallback = {
    setGrading: React.Dispatch<React.SetStateAction<boolean>>
    setLastedSubmission: React.Dispatch<React.SetStateAction<SubmissionPopulateSubmissionTestcasesSecureModel | undefined>>
    selectedLanguage: string
    submitCodeValue: string
}

const ProblemViewLayout = ({
    onSubmit,
    problem,
    previousSubmissions
}:{
    onSubmit: (callback: OnSubmitProblemViewLayoutCallback) => void
    problem: ProblemPoplulateCreatorModel
    previousSubmissions: GetSubmissionByAccountProblemResponse
}) => {

    const navigate = useNavigate();

    // const [problem, setProblem] = useState<ProblemPoplulateCreatorModel>();
	const [selectedLanguage, setSelectedLanguage] = useState("python");
	const [grading, setGrading] = useState<boolean>(false);
	const [submitCodeValue, setSubmitCodeValue] = useState<any>("");

    // const [previousSubmissions, setPreviousSubmissions] =
		useState<GetSubmissionByAccountProblemResponse>();
	const [lastedSubmission, setLastedSubmission] =
		useState<SubmissionPopulateSubmissionTestcasesSecureModel>();

    const handleSubmit = () => {
        onSubmit({setGrading, setLastedSubmission,selectedLanguage,submitCodeValue})
    }

    const handleSelectPreviousSubmission = (submissionId: number) => {
		let submission = null;
		if (
			submissionId === previousSubmissions?.best_submission?.submission_id
		) {
			submission = previousSubmissions?.best_submission;
		} else {
			previousSubmissions?.submissions?.forEach((sub) => {
				if (sub.submission_id === submissionId) {
					submission = sub;
					return;
				}
			});
		}

		if (submission) {
			setSubmitCodeValue(submission.submission_code);
			setLastedSubmission(submission);
			setSelectedLanguage(submission.language);
		}
	};

	return (
		<div className="flex xxl:mt-10 md:mt-5 h-[80vh] xl:h-[90vh]">
			<div className="w-1/2 grid content-between">
				<div className="ml-20">
					<div className="text-3xl text-green-700 font-bold mb-2 flex">
						<ArrowLeft
							size={40}
							className="cursor-pointer mr-2"
							onClick={() => navigate(-1)}
						/>
						{problem?.title}
					</div>
					<div className="flex text-base">
						<div className="flex mr-10">
							<b className="mr-2">Author</b>
							<p className="">{problem?.creator.username}</p>
						</div>

						<div className="flex">
							<b className="mr-2">Updated Date</b>
							<p className="">
								{readableDateFormat(
									String(problem?.updated_date)
								)}
							</p>
						</div>
					</div>
				</div>
				<div>
					{problem && (
						<ReadOnlyPlate
							value={JSON.parse(
								handleDeprecatedDescription(
									String(problem.description)
								)
							)}
							className="h-[70vh] xl:h-[80vh]"
						/>
					)}
				</div>
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
							value={selectedLanguage}
							setValue={setSelectedLanguage}
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
						{grading && (
							<div className="flex items-center">
								<Loader2 className="animate-spin mr-2 text-green-400" />
								Grading ...
							</div>
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
							previousSubmissions?.best_submission as SubmissionPopulateSubmissionTestcasesSecureModel
						}
						submissions={
							previousSubmissions?.submissions as SubmissionPopulateSubmissionTestcasesSecureModel[]
						}
						onSelect={(submissionId) =>
							handleSelectPreviousSubmission(Number(submissionId))
						}
					/>
					<Button
						disabled={grading || !submitCodeValue}
						onClick={handleSubmit}
						className="px-10"
					>
						{grading ? (
							<>
								<Loader2 className="animate-spin mr-2" />
								Submitting
							</>
						) : (
							<>Submit</>
						)}
					</Button>
				</div>
			</div>
		</div>
	);
};

const MonacoEditorWrapper = styled.div`
	height: 80vh;

	@media (max-height: 900px) {
		height: 75vh;
	}
`;

export default ProblemViewLayout;
