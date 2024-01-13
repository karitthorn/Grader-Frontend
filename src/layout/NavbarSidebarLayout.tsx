import React, { useContext, useState } from "react";
import { Separator } from "../components/shadcn/Seperator";
import NavbarMenuLayout from "./NavbarMenuLayout";
import { useNavigate } from "react-router-dom";
import NavSidebar from "../components/NavigationBar/NavSidebar";
import { LoginContext } from "../contexts/LoginContext";

const NavbarSidebarLayout = ({ children }: { children: React.ReactNode }) => {
	const navigate = useNavigate();
	const [close, setClose] = useState(false);
	const { isLogin } = useContext(LoginContext);

	return (
		<NavbarMenuLayout xPad={false} yPad={false}>
			{
				isLogin ? (
					<div className="flex">
				<NavSidebar />
				<div>
					<Separator orientation="vertical" className="" />
				</div>
				<div className="w-full pt-10">{children}</div>
			</div>
				) : (
					<p>No Access</p>
				)
			}
		</NavbarMenuLayout>
	);
};

export default NavbarSidebarLayout;
