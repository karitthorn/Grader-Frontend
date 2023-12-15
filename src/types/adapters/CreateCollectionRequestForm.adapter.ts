import { CreateCollectionRequestForm } from "../forms/CreateCollectionRequestForm";
import { CollectionCreateRequest } from "../models/Collection.model";

export function transformCreateCollectionRequestForm2CreateCollectionRequestForm(createRequest:CreateCollectionRequestForm): CollectionCreateRequest  {
    return {
        name: createRequest.title,
        description: JSON.stringify(createRequest.description),
    };
}

