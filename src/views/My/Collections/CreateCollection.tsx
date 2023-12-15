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

	const accountId = Number(localStorage.getItem("account_id"));

	const handleSave = ({ createRequest,collectionId,setCollectionId,setLoading }: OnCollectionSavedCallback) => {

		if (!setCollectionId || !setLoading || !createRequest || !collectionId) {
			return
		}

		const createCollectionRequest =
			transformCreateCollectionRequestForm2CreateCollectionRequestForm(
				createRequest as CreateCollectionRequestForm
			);
		const problemIds = (createRequest as CreateCollectionRequestForm).problemsInterface.map(
			(problem) => problem.id as number
		);

		setLoading(true)

		if (collectionId === -1) {

			
			CollectionService.create(accountId,createCollectionRequest).then(response => {
				return CollectionService.updateProblem(response.data.collection_id,problemIds)
			}).then(response => {
				setCollectionId(response.data.collection_id)
				toast({
					title: "Create Completed"
				})
				setLoading(false)
			})
		} else {
			CollectionService.update(collectionId,createCollectionRequest).then(response => {
				return CollectionService.updateProblem(response.data.collection_id,problemIds)
			}).then(response => {
				setLoading(false)
				toast({
					title: "Update Completed"
				})
				console.log("Save")
			})
		}
	};

	return (
		<NavbarSidebarLayout>
			<CreateCollectionForm
				onCollectionSave={({ createRequest,collectionId,setCollectionId,setLoading }) =>
					handleSave({ createRequest,collectionId,setCollectionId,setLoading })
				}
				createRequestInitialValue={formInitialValue}
			/>
		</NavbarSidebarLayout>
	);
};

export default CreateCollection;
