import { CollectionProblemPopulateProblemSecureModel } from "../models/Collection.model";
import { PlateEditorValueType } from "../PlateEditorValueType";

export type CreateCollectionRequestForm = {
    title: string;
    description: PlateEditorValueType;
    problems: CollectionProblemPopulateProblemSecureModel[];
}