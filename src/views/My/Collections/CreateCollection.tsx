import React from 'react'
import NavbarSidebarLayout from '../../../layout/NavbarSidebarLayout'
import CreateCollectionForm from '../../../components/Forms/CreateCollectionForm'
import { CreateCollectionRequestForm } from '../../../types/forms/CreateCollectionRequestForm';
import { ELEMENT_PARAGRAPH } from '@udecode/plate-paragraph';

const formInitialValue: CreateCollectionRequestForm = {
	title: "",
	description: [
		{
			id: "1",
			type: ELEMENT_PARAGRAPH,
			children: [{ text: "" }],
		},
	],
	problems: [],
};

const CreateCollection = () => {



  return (
    <NavbarSidebarLayout>
        <CreateCollectionForm createRequestInitialValue={formInitialValue} />
    </NavbarSidebarLayout>
  )
}

export default CreateCollection