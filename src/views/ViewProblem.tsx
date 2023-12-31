import React, { useEffect, useState } from "react";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import { useNavigate, useParams } from "react-router-dom";
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
	SubmissionPopulateSubmissionTestcasesSecureModel,
} from "../types/models/Submission.model";
import { SubmitProblemResponse } from "../types/apis/Submission.api";
import PreviousSubmissionsCombobox from "../components/PreviousSubmissionsCombobox";
import { SubmitProblemResponse2GetSubmissionByAccountProblemResponse } from "../types/adapters/Submission.adapter";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import {
	ArrowLeft,
	ChevronLeftIcon,
	ChevronLeftSquareIcon,
	Loader2,
} from "lucide-react";
import { readableDateFormat } from "../utilities/ReadableDateFormat";
import ProblemViewLayout, {
	OnSubmitProblemViewLayoutCallback,
} from "../components/ProblemViewLayout";

const handleDeprecatedDescription = (description: string): string => {
	if (description[0] === "[") {
		return description;
	} else {
		return JSON.stringify([
			{
				id: "1",
				type: ELEMENT_PARAGRAPH,
				children: [{ text: description }],
			},
		]);
	}
};

const ViewProblem = () => {
	const navigate = useNavigate();
	const { problemId } = useParams();
	const accountId = String(localStorage.getItem("account_id"));

	const [selectedLanguage, setSelectedLanguage] = useState("python");
	const [problem, setProblem] = useState<ProblemPoplulateCreatorModel>();

	const [grading, setGrading] = useState<boolean>(false);
	const [submitCodeValue, setSubmitCodeValue] = useState<any>("");

	const [previousSubmissions, setPreviousSubmissions] =
		useState<GetSubmissionByAccountProblemResponse>();
	const [lastedSubmission, setLastedSubmission] =
		useState<SubmissionPopulateSubmissionTestcasesSecureModel>();

	const handleSelectPreviousSubmission = (submissionId: string) => {
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

	useEffect(() => {
		ProblemService.get(String(problemId)).then((response) => {
			setProblem(response.data);
		});

		SubmissionService.getByAccountProblem(
			accountId,
			String(problemId)
		).then((response) => {
			setPreviousSubmissions(response.data);
		});
	}, []);

	const handleSubmit = ({
		setGrading,
		setLastedSubmission,
		selectedLanguage,
		submitCodeValue,
	}: OnSubmitProblemViewLayoutCallback) => {
		setGrading(true);
		SubmissionService.submit(accountId, String(problemId), {
			language: selectedLanguage,
			submission_code: String(submitCodeValue),
		}).then((response) => {
			console.log(response.data);
			setLastedSubmission(response.data);
			SubmissionService.getByAccountProblem(
				accountId,
				String(problemId)
			).then((response) => {
				setPreviousSubmissions(response.data);
			});
			setGrading(false);
		});
	};

	return (
		<NavbarMenuLayout xPad={false}>
			<div className="ml-10">
				<ProblemViewLayout
					onSubmit={(e) => handleSubmit(e)}
					problem={problem as ProblemPoplulateCreatorModel}
					previousSubmissions={
						previousSubmissions as GetSubmissionByAccountProblemResponse
					}
				/>
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
