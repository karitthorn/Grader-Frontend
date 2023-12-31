import React, { useState } from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import CreateProblemForm, { OnProblemSaveCallback } from "../../../components/Forms/CreateProblemForm";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { useNavigate } from "react-router-dom";
import { CreateProblemRequestForm } from "../../../types/forms/CreateProblemRequestForm";
import { ProblemService } from "../../../services/Problem.service";
import { transformCreateProblemRequestForm2CreateProblemRequest } from "../../../types/adapters/CreateProblemRequestForm.adapter";
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

	const accountId = String(localStorage.getItem("account_id"));
	const navigate = useNavigate();


	const handleSave:OnProblemSaveCallback = (setLoading, createRequest) => {
		setLoading(true);
		ProblemService.create(
			accountId,
			transformCreateProblemRequestForm2CreateProblemRequest(createRequest)
		).then((response) => {
			setLoading(false);
			toast({
				title: "Create Completed",
			});
			navigate(`/my/problems/${response.data.problem_id}`);
		});
	};

	return (
		<NavbarSidebarLayout>
			<CreateProblemForm
				createRequestInitialValue={formInitialValue}
				onProblemSave={(setLoading, createRequest) =>
					handleSave(setLoading, createRequest)
				}
			/>
		</NavbarSidebarLayout>
	);
};

export default CreateProblem;
