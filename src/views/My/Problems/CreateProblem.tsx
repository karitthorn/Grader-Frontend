import React, { useState } from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import CreateProblemForm, { OnProblemSaveCallback } from "../../../components/Forms/CreateProblemForm";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { useNavigate } from "react-router-dom";
import { CreateRequestForm } from "../../../types/forms/CreateRequestForm";
import { ProblemService } from "../../../services/Problem.service";
import { transformCreateRequestForm2CreateProblemRequest } from "../../../types/adapters/CreateRequestForm.adapter";
import { toast } from "../../../components/shadcn/UseToast";

const formInitialValue = {
	title: "",
	description: [
		{
			id: "1",
			type: ELEMENT_PARAGRAPH,
			children: [{ text: "" }],
		},
	],
	language: "python",
	solution: "",
	testcases: "",
	testcase_delimeter: ":::",
	time_limit: 1.5,
};

const CreateProblem = () => {

	const accountId = Number(localStorage.getItem("account_id"));


	const handleSave:OnProblemSaveCallback = (setLoading, problemId, setProblemId,createRequest) => {
		setLoading(true);
		if (problemId === -1) {
			ProblemService.create(
				accountId,
				transformCreateRequestForm2CreateProblemRequest(createRequest)
			).then((response) => {
				setProblemId(response.data.problem_id);
				console.log("Create Completed", response.data);
				setLoading(false);
				toast({
					title: "Create Completed",
				});
			});
		} else {
			ProblemService.update(
				problemId,
				transformCreateRequestForm2CreateProblemRequest(createRequest)
			).then((response) => {
				console.log("Update Completed", response.data);
				setLoading(false);
				toast({
					title: "Update Completed",
				});
			});
		}
	};

	return (
		<NavbarSidebarLayout>
			<CreateProblemForm
				createRequestInitialValue={formInitialValue}
				onProblemSave={(setLoading, problemId, setProblemId,createRequest) =>
					handleSave(setLoading, problemId, setProblemId,createRequest)
				}
			/>
		</NavbarSidebarLayout>
	);
};

export default CreateProblem;
