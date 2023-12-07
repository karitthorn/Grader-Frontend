import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlateEditorValueType } from "../../../types/PlateEditorValueType";
import { ProblemService } from "../../../services/Problem.service";
import { toast } from "../../shadcn/UseToast";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { ChevronLeftIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../shadcn/Tabs";
import { CreateProblemRequest } from "../../../types/apis/Problem.api";
import { Button } from "../../shadcn/Button";
import { CreateProblemRequestForm } from "../../../types/forms/CreateProblemRequestForm";
import GeneralDetail from "./GeneralDetail";
import Scoring from "./Scoring";
import Requirement from "./Requirement";
import Privacy from "./Privacy";
import { TestcaseModel } from "../../../types/models/Problem.model";

const TabList = [
	{
		value: "general",
		label: "General Detail",
	},
	{
		value: "scoring",
		label: "Scoring",
	},
	{
		value: "requirement",
		label: "Requirement",
	},
	{
		value: "privacy",
		label: "Privacy",
	},
];

const testcaseFormat = (testcases: string, delimeter: string) => {
	return testcases.replace(/\r\n/g, "\n").split(delimeter + "\n");
};

const transformCreateProblemRequestForm2CreateProblemRequest = (
	createRequest: CreateProblemRequestForm
): CreateProblemRequest => {
	return {
		title: createRequest.title,
		language: createRequest.language,
		description: JSON.stringify(createRequest.description),
		solution: createRequest.solution,
		testcases: testcaseFormat(
			createRequest.testcases,
			createRequest.testcase_delimeter
		),
		time_limit: createRequest.time_limit,
	};
};

export type OnProblemSaveCallback = (
	setLoading: React.Dispatch<React.SetStateAction<boolean>>,
	problemId: number,
	setProblemId: React.Dispatch<React.SetStateAction<number>>,
	createRequest: CreateProblemRequestForm
	) => void

const CreateProblemForm = ({
	createRequestInitialValue,
	onProblemSave,
	validatedTestcases=[]
}: {
	createRequestInitialValue: CreateProblemRequestForm;
	onProblemSave: OnProblemSaveCallback;
	validatedTestcases?: TestcaseModel[]
}) => {
	const accountId = Number(localStorage.getItem("account_id"));
	const navigate = useNavigate();

	const [loading, setLoading] = useState(false);

	const [currentForm, setCurrentForm] = React.useState("general");
	const [createRequest, setCreateRequest] = useState<CreateProblemRequestForm>(
		createRequestInitialValue
	);

	const [problemId, setProblemId] = useState(-1);

	const handleSave = () => {
		onProblemSave(setLoading,problemId,setProblemId,createRequest)
	};

	useEffect(() => {
		if (validatedTestcases.length !== 0) {
			setCreateRequest({
				...createRequest,
				validated_testcases: validatedTestcases
			})
		}
	},[validatedTestcases])

	return (
		<div className="w-[96%] mx-auto mt-10">
			<div className="flex justify-between">
				<h1 className="text-3xl font-bold tracking-tight flex">
					<ChevronLeftIcon
						size={40}
						className="text-gray-300 cursor-pointer"
						onClick={() => navigate("/my/problems")}
					/>
					{createRequest.title === ""
						? "Create Problem"
						: createRequest.title}
				</h1>
				<div>
					<div className="flex">
						<Tabs defaultValue="general">
							<TabsList>
								{TabList.map((tab, index) => (
									<TabsTrigger
										key={index}
										value={tab.value}
										onClick={() =>
											setCurrentForm(tab.value)
										}
									>
										{tab.label}
									</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
						<Button
							disabled={loading}
							onClick={handleSave}
							className="px-10 ml-5"
						>
							{loading ? "Saving..." : "Save"}
						</Button>
					</div>
				</div>
			</div>

			<div className="mt-3">
				{currentForm === "general" && (
					<GeneralDetail
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				)}
				{currentForm === "scoring" && (
					<Scoring
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				)}
				{currentForm === "requirement" && (
					<Requirement
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				)}
				{currentForm === "privacy" && (
					<Privacy
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				)}
			</div>
		</div>
	);
};

export default CreateProblemForm;
