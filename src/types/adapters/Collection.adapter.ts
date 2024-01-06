import { CreateCollectionRequestForm } from "../forms/CreateCollectionRequestForm";
import { CollectionHashedTable, CollectionModel, CollectionPopulateCollectionProblemPopulateProblemModel, CollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupModel, CollectionPopulateProblemSecureModel, CollectionProblemModel } from "../models/Collection.model";

export function transformCollectionPopulateProblemSecureModel2CollectionHashedTable(collections: CollectionPopulateCollectionProblemPopulateProblemModel[] ): CollectionHashedTable {
    let result:CollectionHashedTable = {};
    for (const collection of collections) {
        result[collection.collection_id] = collection;
    }
    return result;
}

export function transformCollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupModel2CreateCollectionRequest(collection: CollectionPopulateCollectionProblemsPopulateProblemAndCollectionGroupPermissionsPopulateGroupModel): CreateCollectionRequestForm {

    console.log(collection);
    return {
        title: collection.name,
        description: JSON.parse(String(collection.description)),
        problemsInterface: collection.problems.map((cp) => ({
            id: cp.problem.problem_id,
            name: cp.problem.title,
        })),
        groupPermissions: collection.group_permissions.map((cgp) => ({
            group_id: cgp.group.group_id,
            group: cgp.group,
            manageCollections: cgp.permission_manage_collections,
            viewCollections: cgp.permission_view_collections,
        })),
    }
}