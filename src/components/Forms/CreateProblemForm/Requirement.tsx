import React from 'react'
import { CreateProblemRequestForm } from '../../../types/forms/CreateProblemRequestForm';
import { Label } from '../../shadcn/Label';
import { Input } from '../../shadcn/Input';

const Requirement = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateProblemRequestForm;
	setCreateRequest: React.Dispatch<React.SetStateAction<CreateProblemRequestForm>>;
}) => {
	return (
		<div>
			<Label>Time Limit Exceeded (seconds)</Label>
			<Input
				type="number"
				value={createRequest.time_limit}
				onChange={(e) =>
					setCreateRequest({
						...createRequest,
						time_limit: Number(e.target.value),
					})
				}
			/>
		</div>
	);
};

export default Requirement