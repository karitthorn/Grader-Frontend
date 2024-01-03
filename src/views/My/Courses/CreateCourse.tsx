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
import { CreateCourseRequestForm } from "../../../types/forms/CreateCourseRequestForm";
import CreateCourseForm, {
	OnCourseSavedCallback,
} from "../../../components/Forms/CreateCourseForm";
import { transformCreateCourseRequestForm2CreateTopicRequest } from "../../../types/adapters/CreateCourseRequestForm.adapter";
import { TopicService } from "../../../services/Topic.service";
import { useNavigate } from "react-router-dom";
import { EmptyEditorValue } from "../../../constants/DummyEditorValue";

const formInitialValue: CreateCourseRequestForm = {
	title: "",
	description: EmptyEditorValue,
	image: null,
	isPrivate: false,
	collectionsInterface: [],
	groupPermissions: []
};

const CreateCourse = () => {

	const navigate = useNavigate()
	const accountId = String(localStorage.getItem("account_id"));

	const handleSave = ({
		setLoading,
		createRequest,

	}: OnCourseSavedCallback) => {
		if ( !setLoading || !createRequest) {
			return;
		}

		const {formData,collectionIds} = transformCreateCourseRequestForm2CreateTopicRequest(createRequest)

		setLoading(true)
		TopicService.create(accountId, formData).then((response) => {
			return TopicService.updateCollections(response.data.topic_id,collectionIds)
		}).then((response) => {
			setLoading(false)
			toast({
				title: "Create Completed"
			})
			navigate(`/my/courses/${response.data.topic_id}`)
		})
	};

	return (
		<NavbarSidebarLayout>
			<CreateCourseForm
				// onCollectionSave={({ createRequest,collectionId,setCollectionId,setLoading }) =>
				// 	handleSave({ createRequest,collectionId,setCollectionId,setLoading })
				// }
				onCourseSave={({
					createRequest,
	
					setLoading,
				}) =>
					handleSave({
						createRequest,
				
						setLoading,
					})
				}
				createRequestInitialValue={formInitialValue}
			/>
		</NavbarSidebarLayout>
	);
};

export default CreateCourse;
