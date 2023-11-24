import React, { useState } from "react";
import { Separator } from "../components/shadcn/Seperator";
import NavbarMenuLayout from "./NavbarMenuLayout";
import { useNavigate } from "react-router-dom";

const NavbarSidebarLayout = ({ children }: { children: React.ReactNode }) => {

	const navigate = useNavigate();
	const [close, setClose] = useState(false);

	return (
		<NavbarMenuLayout xPad={false} yPad={false}>
			<div className="flex">
				{close ? (
					<div onClick={() => setClose(false)} className="w-1/8 pr-5">
						asd
					</div>
				) : (
					<div className="w-1/6 h-screen pt-10">
						<div >
							<div className="grid ml-5 gap-1">
								<p onClick={() => setClose(true)}>Close</p>
								<p onClick={() => navigate("/my/problems")}>Problems</p>
								<p onClick={() => navigate("/my/collections")}>Collections</p>
								<p>Courses</p>
								<p>Groups</p>
							</div>
 
 
							<div className="mt-3">
								<Separator />
							</div>

							<p className="ml-5">Recent Edited</p>
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
