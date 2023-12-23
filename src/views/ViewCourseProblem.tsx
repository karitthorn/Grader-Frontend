import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProblemPoplulateCreatorModel } from "../types/models/Problem.model";
import { GetSubmissionByAccountProblemResponse } from "../types/models/Submission.model";
import { ProblemService } from "../services/Problem.service";
import { SubmissionService } from "../services/Submission.service";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import ProblemViewLayout, {
	OnSubmitProblemViewLayoutCallback,
} from "../components/ProblemViewLayout";
import CourseNavbarSidebarLayout from "../layout/CourseNavbarSidebarLayout";
import { CourseNavSidebarContext } from "../contexts/CourseNavSidebarContexnt";
import { TopicService } from "../services/Topic.service";

const ViewCourseProblem = () => {
	const accountId = Number(localStorage.getItem("account_id"));
	const { courseId, problemId } = useParams();


	const [problem, setProblem] = useState<ProblemPoplulateCreatorModel>();
	const [previousSubmissions, setPreviousSubmissions] =
		useState<GetSubmissionByAccountProblemResponse>();

	useEffect(() => {
		ProblemService.get(Number(problemId)).then((response) => {
			setProblem(response.data);
		});

		SubmissionService.getByAccountProblemInTopic(
			accountId,
			Number(problemId),
			Number(courseId)
		).then((response) => {
			setPreviousSubmissions(response.data);
		});
	}, [accountId, problemId, courseId]);

	const handleSubmit = ({
		setGrading,
		setLastedSubmission,
		selectedLanguage,
		submitCodeValue,
	}: OnSubmitProblemViewLayoutCallback) => {
		setGrading(true);
		SubmissionService.topicSubmit(
			accountId,
			Number(courseId),
			Number(problemId),
			{
				language: selectedLanguage,
				submission_code: String(submitCodeValue),
			}
		).then((response) => {
			setLastedSubmission(response.data);
			SubmissionService.getByAccountProblemInTopic(
				accountId,
				Number(problemId),
				Number(courseId)
			).then((response) => {
				setPreviousSubmissions(response.data);
			});
			setGrading(false);
		});
	};

	return (
		<CourseNavbarSidebarLayout>
			<div className="ml-5">
				<ProblemViewLayout
					onSubmit={(e) => handleSubmit(e)}
					problem={problem as ProblemPoplulateCreatorModel}
					previousSubmissions={
						previousSubmissions as GetSubmissionByAccountProblemResponse
					}
				/>
			</div>
		</CourseNavbarSidebarLayout>
	);
};

export default ViewCourseProblem;
