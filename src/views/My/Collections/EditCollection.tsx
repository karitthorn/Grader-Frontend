import React, { useEffect } from 'react'
import NavbarSidebarLayout from '../../../layout/NavbarSidebarLayout'
import CreateCollectionForm, { OnCollectionSavedCallback } from '../../../components/Forms/CreateCollectionForm'
import { CreateCollectionRequestForm } from '../../../types/forms/CreateCollectionRequestForm'
import { useParams } from 'react-router-dom'
import { CollectionService } from '../../../services/Collection.service'
import { ItemInterface } from 'react-sortablejs'
import { transformCreateProblemRequestForm2CreateProblemRequest } from '../../../types/adapters/CreateProblemRequestForm.adapter'
import { transformCreateCollectionRequestForm2CreateCollectionRequestForm } from '../../../types/adapters/CreateCollectionRequestForm.adapter'
import { set } from 'react-hook-form'
import { toast } from '../../../components/shadcn/UseToast'
import { handleDeprecatedDescription } from '../../../utilities/HandleDeprecatedDescription'

const EditCollection = () => {

    const {collectionId} = useParams();
    const editCollectionId = Number(collectionId);

    const [createRequest, setCreateRequest] = React.useState<CreateCollectionRequestForm>()

    const handleSave = ({setLoading,createRequest}: OnCollectionSavedCallback) => {

        if (!setLoading || !createRequest) {
            return;
        }

        const problemIds = (createRequest as CreateCollectionRequestForm).problemsInterface.map(
            (problem) => problem.id as number
        );
        const request = transformCreateCollectionRequestForm2CreateCollectionRequestForm(createRequest as CreateCollectionRequestForm)

        setLoading(true)

        CollectionService.update(editCollectionId,request).then(response => {
            return CollectionService.updateProblem(response.data.collection_id,problemIds)
        }).then(response => {
            setLoading(false)
            console.log("Save")
            toast({
                title: "Update Completed"
            })
        })
    }

    useEffect(()=> {
        CollectionService.get(editCollectionId).then(response => {
            setCreateRequest({
                title: response.data.name,
                description: JSON.parse(handleDeprecatedDescription(String(response.data.description))),
                problemsInterface: response.data.problems.map(collectionProblem => (
                    {
                        id: collectionProblem.problem.problem_id,
                        name: collectionProblem.problem.title
                    } as ItemInterface
                ))
            })
        })
    },[editCollectionId])

  return (
    <NavbarSidebarLayout>
        {createRequest && <CreateCollectionForm onCollectionSave={({setLoading,createRequest}) => handleSave({setLoading,createRequest})} createRequestInitialValue={createRequest}/>}
    </NavbarSidebarLayout>
  )
}

export default EditCollection