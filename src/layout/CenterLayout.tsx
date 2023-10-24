import React, { Children } from "react";
import { Props } from "../types/Props";
import NavbarMenuLayout from "./NavbarMenuLayout";

const CenterContainer = ({ children, className = "" }: Props) => {
	return (
		<NavbarMenuLayout padding={false}>
			<div className="flex h-screen">
				<div
					className={
						"m-auto " + className
					} /* className="m-auto w-1/2" */
				>
					{children}
				</div>
			</div>
		</NavbarMenuLayout>
	);
};

export default CenterContainer;
