import { PlateEditorValueType } from "../PlateEditorValueType";
import { TestcaseModel } from "../models/Problem.model";

export type CreateProblemRequestForm = {
	title: string;
	description: PlateEditorValueType;
	language: string;
	solution: string;
	testcases: string;
	testcase_delimeter: string;
	time_limit: number;
	validated_testcases?: TestcaseModel[];
};