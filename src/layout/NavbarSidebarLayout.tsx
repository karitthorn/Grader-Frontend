import React, { useState } from "react";
import { Separator } from "../components/shadcn/Seperator";
import NavbarMenuLayout from "./NavbarMenuLayout";
import { useNavigate } from "react-router-dom";
import NavSidebar from "../components/NavigationBar/NavSidebar";

const NavbarSidebarLayout = ({ children }: { children: React.ReactNode }) => {

	const navigate = useNavigate();
	const [close, setClose] = useState(false);

	return (
		<NavbarMenuLayout xPad={false} yPad={false}>
			<div className="flex">
				<NavSidebar/>
				<div>
					<Separator orientation="vertical" className="" />
				</div>
				<div className="w-full pt-10">{children}</div>
			</div>
		</NavbarMenuLayout>
	);
};

export default NavbarSidebarLayout;
