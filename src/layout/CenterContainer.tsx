import React, { Children } from "react";
import { Props } from "../types/Props";

const CenterContainer = ({children} : Props) => {
	return (
		<div className="flex h-screen">
			<div
				className="w-[350px] justify-center m-auto" /* className="m-auto w-1/2" */
			>
				{children}
			</div>
		</div>
	);
};

export default CenterContainer;
