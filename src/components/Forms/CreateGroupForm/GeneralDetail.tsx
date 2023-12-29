import React, { useEffect, useState } from 'react'
import { CreateProblemRequestForm } from '../../../types/forms/CreateProblemRequestForm';
import { PlateEditorValueType } from '../../../types/PlateEditorValueType';
import { Label } from '../../shadcn/Label';
import { Input } from '../../shadcn/Input';
import DetailPlateEditor from '../../DetailPlateEditor';
import { CreateCollectionRequestForm } from '../../../types/forms/CreateCollectionRequestForm';
import { CreateCourseRequestForm } from '../../../types/forms/CreateCourseRequestForm';
import { handleDeprecatedDescription } from '../../../utilities/HandleDeprecatedDescription';
import { Textarea } from '../../shadcn/Textarea';
import { CreateGroupRequestForm } from '../../../types/forms/CreateGroupRequestForm';

const GeneralDetail = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateGroupRequestForm;
	setCreateRequest: React.Dispatch<React.SetStateAction<CreateGroupRequestForm>>;
}) => {

	return (
		<div>
			<Label>Title</Label>
			<Input
				value={createRequest.name}
				onChange={(e) =>
					setCreateRequest({
						...createRequest,
						name: e.target.value,
					})
				}
				type="text"
			/>

			<Label>Detail</Label>
			<Textarea
				value={String(createRequest.description)}
				onChange={(e) =>
					setCreateRequest({
						...createRequest,
						description: e.target.value,
					})
				}
			/>

			<Label>Color</Label>
			<Input
				value={String(createRequest.color)}
				onChange={(e) =>
					setCreateRequest({
						...createRequest,
						color: e.target.value,
					})
				}
			type="color"/>
		</div>
	);
};

export default GeneralDetail