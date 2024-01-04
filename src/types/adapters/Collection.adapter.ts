import { CollectionHashedTable, CollectionModel, CollectionPopulateCollectionProblemPopulateProblemModel, CollectionPopulateProblemSecureModel, CollectionProblemModel } from "../models/Collection.model";

export function transformCollectionPopulateProblemSecureModel2CollectionHashedTable(collections: CollectionPopulateCollectionProblemPopulateProblemModel[] ): CollectionHashedTable {
    let result:CollectionHashedTable = {};
    for (const collection of collections) {
        result[collection.collection_id] = collection;
    }
    return result;
}