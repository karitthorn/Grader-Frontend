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

const EditProblem = () => {
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
		ProblemService.update(
			String(editProblemId),
			transformCreateProblemRequestForm2CreateProblemRequest(createRequest)
		).then((response) => {
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
		ProblemService.get(editProblemId).then((response) => {
			setProblem(response.data)
			setCreateRequest({
				title: response.data.title,
				description: JSON.parse(
					handleDeprecatedDescription(String(response.data.description))
				),
				language: response.data.language,
				solution: response.data.solution,
				testcases: response.data.testcases
					.map((testcase) => testcase.input)
					.join(":::\n"),
				testcase_delimeter: ":::",
				time_limit: response.data.time_limit,
			});
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
