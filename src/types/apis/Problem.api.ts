import { AxiosResponse } from "axios";
import { ErrorResponse } from "./ErrorHandling";
import {
	ProblemModel,
	ProblemPoplulateCreatorModel,
	ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel,
	ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel,
	ProblemPopulateCreatorSecureModel,
	ProblemPopulateTestcases,
	ProblemSecureModel,
	TestcaseModel,
} from "../models/Problem.model";
import { AccountModel } from "../models/Account.model";
import { GroupModel, ProblemGroupPermissionModel } from "../models/Group.model";

export type CreateProblemRequest = {
	title: string;
	language: string;
	description: string | null;
	solution: string;
	testcases: string[];
	time_limit: number;
	allowed_languages: string;
};

export type UpdateProblemRequest = {
	title?: string;
	language?: string;
	description?: string;
	solution?: string;
	testcases?: string[];
	time_limit?: number;
};

export type GetAllProblemsByAccountResponse = {
	problems: ProblemPopulateTestcases[];
	manageable_problems: ProblemPopulateTestcases[];
};

export type ValidateProgramRequest = {
	language: string;
	source_code: string;
	testcases: string[];
	time_limited: number;
};

export type RuntimeResult = {
	input: string;
	output: string | null;
	runtime_status: string;
};

export type ValidateProgramResponse = {
	runnable: boolean;
	has_error: boolean;
	has_timeout: boolean;
	runtime_results: RuntimeResult[];
};

export type GetAllProblemsResponse = {
	problems: ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[];
};

export type ProblemGroupPermissionCreateRequest = {
	group_id: string;
	permission_manage_problems?: boolean;
	permission_view_problems?: boolean;
};

export type ProblemGroupPermissionPopulateGroupModel =
	ProblemGroupPermissionModel & {
		group: GroupModel;
	};

export type ProblemServiceAPI = {
	create: (
		accountId: string,
		request: CreateProblemRequest
	) => Promise<AxiosResponse<ProblemModel>>;
	getAll: () => Promise<AxiosResponse<GetAllProblemsResponse>>;
	getAllAsCreator: (
		accountId: string
	) => Promise<AxiosResponse<GetAllProblemsByAccountResponse>>;
	get: (
		accountId: string,
		problemId: string
	) => Promise<
		AxiosResponse<ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel>
	>;
	update: (
		problemId: string,
		request: UpdateProblemRequest | CreateProblemRequest
	) => Promise<AxiosResponse<ProblemModel>>;
	// deleteMultiple: (problemIds:string[]) => Promise<AxiosResponse<null>>;
	delete: (problemId: string) => Promise<AxiosResponse<null>>;
	updateGroupPermissions: (
		problemId: string,
		accountId: string,
		groups: ProblemGroupPermissionCreateRequest[]
	) => Promise<
		AxiosResponse<ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel>
	>;
	validateProgram: (
		request: ValidateProgramRequest
	) => Promise<AxiosResponse<ValidateProgramResponse>>;
	getPublic: (problemId: string) => Promise<AxiosResponse<ProblemPopulateCreatorSecureModel>>;
};
