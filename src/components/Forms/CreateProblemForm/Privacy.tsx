import React, { useState } from 'react'
import { CreateRequestForm } from '../../../types/forms/CreateRequestForm';
import { PlateEditorValueType } from '../../../types/models/PlateEditorValueType';
import { Label } from '../../shadcn/Label';
import { Input } from '../../shadcn/Input';
import DetailPlateEditor from '../../DetailPlateEditor';
import { Switch } from '../../shadcn/Switch';

const Privacy = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateRequestForm;
	setCreateRequest: React.Dispatch<React.SetStateAction<CreateRequestForm>>;
}) => {
	createRequest;
	setCreateRequest;

	return (
		<div>
			<div className="flex items-center space-x-2">
				<Label htmlFor="airplane-mode">Visibility</Label>
				<Switch id="airplane-mode" />
			</div>

			<div className="flex items-center space-x-2">
				<Label htmlFor="airplane-mode">Allow Reference</Label>
				<Switch id="airplane-mode" />
			</div>
		</div>
	);
};

export default Privacy