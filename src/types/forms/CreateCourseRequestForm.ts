import { ItemInterface } from "react-sortablejs";
import { PlateEditorValueType } from "../PlateEditorValueType";

export type CreateCourseRequestForm = {
    title: string;
    description: PlateEditorValueType;
    image?: File | null;
    isPrivate?: boolean;
    collectionsInterface: ItemInterface[];
}