import React, { useState } from "react";
import { Separator } from "../components/shadcn/Seperator";

const Sidebar = ({ children }: { children: React.ReactNode }) => {
	const [close, setClose] = useState(false);

	return (
		<div className="flex">
			{close ? (
				<div onClick={() => setClose(false)} className="w-1/8 pr-5">asd</div>
			) : (
				<div className="w-1/6">
					<div onClick={() => setClose(true)}>
						<p>Problems</p>
						<p>Collections</p>
						<p>Courses</p>
						<p>Groups</p>

						<Separator />

						<p>Recent Edited</p>
					</div>
				</div>
			)}

			<div>
				<Separator orientation="vertical" className="" />
			</div>
			<div className="w-full">{children}</div>
		</div>
	);
};

export default Sidebar;
