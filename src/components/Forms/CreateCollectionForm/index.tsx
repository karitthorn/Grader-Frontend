import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlateEditorValueType } from "../../../types/PlateEditorValueType";
import { ProblemService } from "../../../services/Problem.service";
import { toast } from "../../shadcn/UseToast";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { ArrowLeft, ChevronLeftIcon, Loader2 } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../shadcn/Tabs";
import { CreateProblemRequest } from "../../../types/apis/Problem.api";
import { Button } from "../../shadcn/Button";
import { CreateProblemRequestForm } from "../../../types/forms/CreateProblemRequestForm";
import { TestcaseModel } from "../../../types/models/Problem.model";
import GeneralDetail from "./GeneralDetail";
import { CreateCollectionRequestForm } from "../../../types/forms/CreateCollectionRequestForm";
import ManageProblem from "./ManageProblems";
import ManageProblems from "./ManageProblems";
import FormSaveButton from "../FormSaveButton";
import ManageGroups from "./ManageGroups";

const TabList = [
	{
		value: "general",
		label: "General Detail",
	},
	{
		value: "problems",
		label: "Manage Problems",
	},
	{
		value: "groups",
		label: "Manage Groups & Permissions",
	},
];

export type OnCollectionSavedCallback = {
	setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
	createRequest?: CreateCollectionRequestForm;
};

const CreateCollectionForm = ({
	createRequestInitialValue,
	onCollectionSave,
}: {
	createRequestInitialValue: CreateCollectionRequestForm;
	onCollectionSave: (callback: OnCollectionSavedCallback) => void;
}) => {
	const navigate = useNavigate();
	const [currentForm, setCurrentForm] = useState("general");
	const [loading, setLoading] = useState(false);
	const [createRequest, setCreateRequest] =
		useState<CreateCollectionRequestForm>(createRequestInitialValue);

	const handleSave = () => {
		onCollectionSave({
			setLoading,
			createRequest,
		});
	};

	return (
		<div className="w-[96%] mx-auto mt-10">
			<div className="flex justify-between">
				<h1 className="text-3xl font-bold tracking-tight flex">
					<ArrowLeft
						size={40}
						className="text-gray-400 transition-all pr-0 hover:pr-1 cursor-pointer mr-2"
						onClick={() => navigate("/my/collections")}
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
						<FormSaveButton
							disabled={loading}
							onClick={handleSave}
						/>
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
				{currentForm === "problems" && (
					<ManageProblems
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				)}

				{currentForm === "groups" && (
					<ManageGroups
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				)}
			</div>
		</div>
	);
};

export default CreateCollectionForm;
