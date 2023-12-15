import { ItemInterface } from "react-sortablejs";
import { CollectionProblemPopulateProblemSecureModel } from "../models/Collection.model";
import { PlateEditorValueType } from "../PlateEditorValueType";

export type CreateCollectionRequestForm = {
    title: string;
    description: PlateEditorValueType;
    problemsInterface: ItemInterface[];
}