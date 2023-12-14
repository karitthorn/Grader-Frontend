import { Check, Circle, X } from 'lucide-react';
import React from 'react'

const SolidCircle = ({className=""}:{
	className?: string
}) => {
	return (
		<div className={className}>
			<div className='p-2 rounded-full'>
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
				<div className='p-2 rounded-full bg-green-400'></div>
			) : (
				<div className='p-2 rounded-full bg-red-400'></div>
			)
	}
}

export default Checkmark