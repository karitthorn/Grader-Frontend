import React from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import CreateCollectionForm, {
	OnCollectionSavedCallback,
} from "../../../components/Forms/CreateCollectionForm";
import { CreateCollectionRequestForm } from "../../../types/forms/CreateCollectionRequestForm";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { transformCreateCollectionRequestForm2CreateCollectionRequestForm } from "../../../types/adapters/CreateCollectionRequestForm.adapter";
import { CollectionService } from "../../../services/Collection.service";
import { toast } from "../../../components/shadcn/UseToast";
import { useNavigate } from "react-router-dom";

const formInitialValue: CreateCollectionRequestForm = {
	title: "",
	description: [
		{
			id: "1",
			type: ELEMENT_PARAGRAPH,
			children: [{ text: "" }],
		},
	],
	problemsInterface: [],
};

const CreateCollection = () => {

	const accountId = String(localStorage.getItem("account_id"));
	const navigate = useNavigate();

	const handleSave = ({ createRequest,setLoading }: OnCollectionSavedCallback) => {

		if ( !setLoading || !createRequest) {
			return
		}

		const createCollectionRequest =
			transformCreateCollectionRequestForm2CreateCollectionRequestForm(
				createRequest as CreateCollectionRequestForm
			);
		const problemIds = (createRequest as CreateCollectionRequestForm).problemsInterface.map(
			(problem) => problem.id as string
		);

		setLoading(true)

		CollectionService.create(accountId,createCollectionRequest).then(response => {
			return CollectionService.updateProblem(response.data.collection_id,problemIds)
		}).then(response => {
			// setCollectionId(response.data.collection_id)
			toast({
				title: "Create Completed"
			})
			navigate(`/my/collections/${response.data.collection_id}`)
			setLoading(false)
		})
	};

	return (
		<NavbarSidebarLayout>
			<CreateCollectionForm
				onCollectionSave={({ createRequest,setLoading }) =>
					handleSave({ createRequest,setLoading })
				}
				createRequestInitialValue={formInitialValue}
			/>
		</NavbarSidebarLayout>
	);
};

export default CreateCollection;
