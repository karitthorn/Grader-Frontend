import React, { useState } from "react";
import { Separator } from "../components/shadcn/Seperator";
import NavbarMenuLayout from "./NavbarMenuLayout";

const NavbarSidebarLayout = ({ children }: { children: React.ReactNode }) => {
	const [close, setClose] = useState(false);

	return (
		<NavbarMenuLayout xPad={false} yPad={false}>
			<div className="flex">
			{close ? (
				<div onClick={() => setClose(false)} className="w-1/8 pr-5">asd</div>
			) : (
				<div className="w-1/6 h-screen pt-10">
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
			<div className="w-full pt-10">{children}</div>
		</div>
		</NavbarMenuLayout>
	);
};

export default NavbarSidebarLayout;
