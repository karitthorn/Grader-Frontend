import { PlateEditorValueType } from "../models/PlateEditorValueType";

export type CreateCollectionRequestForm = {
    title: string;
    description: PlateEditorValueType;
    problemIds: number[];
}