import React from "react";
import { CreateCollectionRequestForm } from "../../../types/forms/CreateCollectionRequestForm";

const ManageProblems = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateCollectionRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateCollectionRequestForm>
	>;
}) => {
	createRequest;
	setCreateRequest;

	return <div>ManageProblems</div>;
};

export default ManageProblems;
