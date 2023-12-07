import React, { useEffect, useState } from 'react'
import { CreateProblemRequestForm } from '../../../types/forms/CreateProblemRequestForm';
import { PlateEditorValueType } from '../../../types/PlateEditorValueType';
import { Label } from '../../shadcn/Label';
import { Input } from '../../shadcn/Input';
import DetailPlateEditor from '../../DetailPlateEditor';

const GeneralDetail = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateProblemRequestForm;
	setCreateRequest: React.Dispatch<React.SetStateAction<CreateProblemRequestForm>>;
}) => {
	const [editorUpdateCooldown, setEditorUpdateCooldown] = useState(false);

	const handleEditorChange = (value: PlateEditorValueType) => {
		if (!editorUpdateCooldown) {
			setCreateRequest({ ...createRequest, description: value });

			setEditorUpdateCooldown(true);
			setTimeout(() => {
				setEditorUpdateCooldown(false);
			}, 1000);
		}
	};

	useEffect(()=>{
		console.log("General Detail",createRequest)
	},[createRequest])

	return (
		<div>
			<Label>Title</Label>
			<Input
				value={createRequest.title}
				onChange={(e) =>
					setCreateRequest({
						...createRequest,
						title: e.target.value,
					})
				}
				type="text"
			/>

			<Label>Detail</Label>
			<div className="rounded-lg border bg-background shadow">
				<DetailPlateEditor
					value={createRequest.description}
					onChange={(e) => handleEditorChange(e)}
				/>
			</div>
		</div>
	);
};

export default GeneralDetail