import { CollectionHashedTable, CollectionModel, CollectionPopulateProblemSecureModel } from "../models/Collection.model";

export function transformCollectionModel2CollectionHashedTable(collections: CollectionModel[] | CollectionPopulateProblemSecureModel[] ): CollectionHashedTable {
    let result:CollectionHashedTable = {};
    for (const collection of collections) {
        result[collection.collection_id] = collection;
    }
    return result;
}