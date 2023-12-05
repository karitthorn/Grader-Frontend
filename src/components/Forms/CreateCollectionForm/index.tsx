import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlateEditorValueType } from "../../../types/models/PlateEditorValueType";
import { ProblemService } from "../../../services/Problem.service";
import { toast } from "../../shadcn/UseToast";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { ChevronLeftIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../shadcn/Tabs";
import { CreateProblemRequest } from "../../../types/apis/Problem.api";
import { Button } from "../../shadcn/Button";
import { CreateProblemRequestForm } from "../../../types/forms/CreateProblemRequestForm";
import { TestcaseModel } from "../../../types/models/Problem.model";
import GeneralDetail from "./GeneralDetail";
import { CreateCollectionRequestForm } from "../../../types/forms/CreateCollectionRequestForm";
import ManageProblem from "./ManageProblems";
import ManageProblems from "./ManageProblems";

const TabList = [
	{
		value: "general",
		label: "General Detail",
	},
	{
		value: "problems",
		label: "Manage Problems",
	},
]

const CreateCollectionForm = ({
	createRequestInitialValue
}: {
	createRequestInitialValue: CreateCollectionRequestForm
}) => {

    const navigate = useNavigate();
    const [currentForm, setCurrentForm] = useState("general");

    const [createRequest, setCreateRequest] = useState<CreateCollectionRequestForm>(createRequestInitialValue)

  return (
    <div className="w-[96%] mx-auto mt-10">
			<div className="flex justify-between">
				<h1 className="text-3xl font-bold tracking-tight flex">
					<ChevronLeftIcon
						size={40}
						className="text-gray-300 cursor-pointer"
						onClick={() => navigate(-1)}
					/>
					Collection Title
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
							// disabled={loading}
							// onClick={handleSave}
							className="px-10 ml-5"
						>
                            Save
							{/* {loading ? "Saving..." : "Save"} */}
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
				{currentForm === "problems" && (
					<ManageProblems
						createRequest={createRequest}
						setCreateRequest={setCreateRequest}
					/>
				)}
			</div>
		</div>
  )
}

export default CreateCollectionForm