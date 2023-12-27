import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
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
import { CreateCollectionRequestForm } from "../../../types/forms/CreateCollectionRequestForm";
// import GeneralDetail from "./GeneralDetail";
// import ManageCollections from "./ManageCollections";
import FormSaveButton from "../FormSaveButton";
import GeneralDetail from "./GeneralDetail";

const TabList = [
	{
		value: "general",
		label: "General Detail",
	},
	{
		value: "collections",
		label: "Manage Collections",
	},
];

export type OnCourseSavedCallback = {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	courseId: number;
	setCourseId: React.Dispatch<React.SetStateAction<number>>;
	createRequest: CreateGroupRequestForm;
}

const CreateGroupForm = ({
	createRequestInitialValue,
	onCourseSave,
}: // onCollectionSave,
{
	createRequestInitialValue: CreateGroupRequestForm;
	onCourseSave: (callback: OnCourseSavedCallback) => void;
	// onCollectionSave: (callback: OnCollectionSavedCallback) => void;
}) => {
	const navigate = useNavigate();
	const [currentForm, setCurrentForm] = useState("general");
	const [loading, setLoading] = useState(false);

	const [courseId, setCourseId] = useState(-1);

	const [createRequest, setCreateRequest] = useState<CreateGroupRequestForm>(
		createRequestInitialValue
	);

	const handleSave = () => {
		onCourseSave({
			setLoading,
			createRequest,
			courseId,
			setCourseId,
		});
	};

	return (
		<div className="w-[96%] mx-auto mt-10">
			<div className="flex justify-between">
				<h1 className="text-3xl font-bold tracking-tight flex">
					<ArrowLeft
						size={40}
						className="text-gray-400 transition-all pr-0 hover:pr-1 cursor-pointer mr-2"
						onClick={() => navigate("/my/groups")}
					/>
					{createRequest.name === ""
						? "Create Group"
						: createRequest.name}
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
				{/* {currentForm === "collections" && (
					<ManageCollections
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				)} */}
			</div>
		</div>
	);
};

export default CreateGroupForm;
