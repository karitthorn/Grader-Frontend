import React, { useEffect, useState } from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import CreateProblemForm, {
	OnProblemSaveCallback,
} from "../../../components/Forms/CreateProblemForm";
import { ProblemService } from "../../../services/Problem.service";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { toast } from "../../../components/shadcn/UseToast";
import { transformCreateProblemRequestForm2CreateProblemRequest } from "../../../types/adapters/CreateProblemRequestForm.adapter";
import { CreateProblemRequestForm } from "../../../types/forms/CreateProblemRequestForm";
import { useParams } from "react-router-dom";
import { ProblemPoplulateCreatorModel } from "../../../types/models/Problem.model";
import { transformProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel2CreateProblemRequestForm } from "../../../types/adapters/Problem.adapter";

const EditProblem = () => {
	
	const accountId = String(localStorage.getItem("account_id"));

	const { problemId } = useParams();
	const editProblemId = String(problemId);

	const [problem,setProblem] = useState<ProblemPoplulateCreatorModel>();

	const [currentForm, setCurrentForm] = React.useState("general");
	const [createRequest, setCreateRequest] = useState<CreateProblemRequestForm>();

	const handleSave: OnProblemSaveCallback = (
		setLoading,
		createRequest
	) => {
		setLoading(true);

		const { request,groups } = transformCreateProblemRequestForm2CreateProblemRequest(createRequest)

		ProblemService.update(
			String(editProblemId),
			request
		).then((response) => {
			return ProblemService.updateGroupPermissions(response.data.problem_id,accountId,groups)
		}).then((response) => {
			console.log("Update Completed", response.data);
			setLoading(false);
			toast({
				title: "Problem Updated",
			});
		});
	};

	const handleDeprecatedDescription = (description: string): string => {
		if (description[0] === "[") {
			return description;
		} else {
			return JSON.stringify([
				{
					id: "1",
					type: ELEMENT_PARAGRAPH,
					children: [{ text: description }],
				},
			]);
		}
	};

	useEffect(() => {
		ProblemService.get(accountId,editProblemId).then((response) => {
			setProblem(response.data)
			setCreateRequest(transformProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel2CreateProblemRequestForm(response.data));
		});
	}, []);
	return (
		<NavbarSidebarLayout>
			{createRequest && <CreateProblemForm
				createRequestInitialValue={createRequest}
				validatedTestcases={problem?.testcases}
				onProblemSave={(
					setLoading,
				
					createRequest
				) =>
					handleSave(
						setLoading,
						
						createRequest
					)
				}
			/>}
		</NavbarSidebarLayout>
	);
};

export default EditProblem;
