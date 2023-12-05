import { testcaseParse } from "../../utilities/TestcaseFormat";
import { CreateProblemRequest } from "../apis/Problem.api";
import { CreateProblemRequestForm } from "../forms/CreateProblemRequestForm";

export const transformCreateProblemRequestForm2CreateProblemRequest = (
	createRequest: CreateProblemRequestForm
): CreateProblemRequest => {
	return {
		title: createRequest.title,
		language: createRequest.language,
		description: JSON.stringify(createRequest.description),
		solution: createRequest.solution,
		testcases: testcaseParse(
			createRequest.testcases,
			createRequest.testcase_delimeter
		),
		time_limit: createRequest.time_limit,
	};
};