import { Check, Circle, X } from 'lucide-react';
import React from 'react'

const SolidCircle = ({...args}) => {
	return (
		<div {...args}>
			<div className='p-2 rounded-full bg-green-500'>
			</div>
		</div>
	)
}

const Checkmark = ({ status,variant="check" }: { 
	status: boolean,
	variant?: "check" | "circle"
}) => {

	switch(variant){
		case "check":
			return status ? (
				<Check
				size={20} className="mr-2 text-green-400" />
			) : (
				<X size={20} className="mr-2 text-red-400" />
			)

		case "circle":
			return status ? (
				<SolidCircle/>
			) : (
				<SolidCircle/>
			)
	}
}

export default Checkmark