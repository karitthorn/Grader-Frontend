import React from 'react'
import { CreateRequestForm } from '../../../types/forms/CreateRequestForm';
import { Label } from '../../shadcn/Label';
import { Input } from '../../shadcn/Input';

const Requirement = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateRequestForm;
	setCreateRequest: React.Dispatch<React.SetStateAction<CreateRequestForm>>;
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