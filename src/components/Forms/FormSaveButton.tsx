import React, { useEffect } from "react";
import { Button } from "../shadcn/Button";
import { ArrowDownToLine, Loader2, Plus } from "lucide-react";
import { useParams } from "react-router-dom";

const FormSaveButton = ({
    disabled,
    onClick,
}:{
    disabled: boolean
    onClick: () => void
}) => {

	const {problemId,courseId,collectionId} = useParams()


	return (
		<Button disabled={disabled} onClick={onClick} className="px-10 ml-5">
			{disabled ? (
				<>
					<Loader2 className="animate-spin mr-2" />
					{(problemId || courseId || collectionId) ? "Saving" : "Creating"}
				</>
			) : (
				<>
					
					{(problemId || courseId || collectionId) ? <ArrowDownToLine size={20} className="mr-2"/> : <Plus size={20} className="mr-2"/>}
					{(problemId || courseId || collectionId) ? "Save" : "Create"}
				</>
			)}
			{/* {loading ? "Saving..." : "Save"} */}
		</Button>
	);
};

export default FormSaveButton;
