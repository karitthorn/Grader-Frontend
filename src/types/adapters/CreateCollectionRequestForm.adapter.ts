import { CollectionGroupPermissionCreateRequest } from "../apis/Collection.api";
import { CreateCollectionRequestForm } from "../forms/CreateCollectionRequestForm";
import { CollectionCreateRequest } from "../models/Collection.model";

export function transformCreateCollectionRequestForm2CreateCollectionRequestForm(createRequest:CreateCollectionRequestForm): {
    request: CollectionCreateRequest
    problemIds: string[]
    groups: CollectionGroupPermissionCreateRequest[]
}  {
    const request = {
        name: createRequest.title,
        description: JSON.stringify(createRequest.description),
    };

    const problemIds = createRequest.problemsInterface.map((problem) => problem.id as string);

    const groups = createRequest.groupPermissions.map((groupPermission) => ({
        group_id: groupPermission.group_id,
        permission_manage_collections: groupPermission.manageCollections,
        permission_view_collections: groupPermission.viewCollections,
    }));

    return { request, problemIds, groups };
}

