import { PlateEditorValueType } from "../models/PlateEditorValueType";
import { TestcaseModel } from "../models/Problem.model";

export type CreateRequestForm = {
	title: string;
	description: PlateEditorValueType;
	language: string;
	solution: string;
	testcases: string;
	testcase_delimeter: string;
	time_limit: number;
	validated_testcases?: TestcaseModel[];
};