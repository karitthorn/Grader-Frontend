import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProblemPoplulateCreatorModel } from "../types/models/Problem.model";
import { GetSubmissionByAccountProblemResponse } from "../types/models/Submission.model";
import { ProblemService } from "../services/Problem.service";
import { SubmissionService } from "../services/Submission.service";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import ProblemViewLayout, { OnSubmitProblemViewLayoutCallback } from "../components/ProblemViewLayout";

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
	},[accountId,problemId,courseId]);

  const handleSubmit = ({setGrading, setLastedSubmission,selectedLanguage,submitCodeValue}: OnSubmitProblemViewLayoutCallback) => {
    setGrading(true);
		SubmissionService.topicSubmit(accountId,Number(courseId), Number(problemId), {
			language: selectedLanguage,
			submission_code: String(submitCodeValue),
		}).then((response) => {
			setLastedSubmission(response.data);
			setGrading(false);
		});
  }

	return <NavbarMenuLayout xPad={false}>
    <ProblemViewLayout
      onSubmit={(e) => handleSubmit(e)}
      problem={problem as ProblemPoplulateCreatorModel}
      previousSubmissions={previousSubmissions as GetSubmissionByAccountProblemResponse}
    />
  </NavbarMenuLayout>
};

export default ViewCourseProblem;
