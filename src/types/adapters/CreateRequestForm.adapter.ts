import { testcaseParse } from "../../utilities/TestcaseFormat";
import { CreateProblemRequest } from "../apis/Problem.api";
import { CreateRequestForm } from "../forms/CreateRequestForm";

export const transformCreateRequestForm2CreateProblemRequest = (
	createRequest: CreateRequestForm
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