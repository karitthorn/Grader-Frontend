import React from "react";
import NavbarMenuLayout from "./NavbarMenuLayout";
import CourseNavSidebar from "../components/NavigationBar/CourseNavSidebar";
import { Separator } from "../components/shadcn/Seperator";

const CourseNavbarSidebarLayout = ({
	children,
}: {
	children?: React.ReactNode;
}) => {
	return (
		<NavbarMenuLayout xPad={false} yPad={false}>
			<div className="flex">
				<div className="w-1/6">
					<CourseNavSidebar />
				</div>
				<div>
					<Separator orientation="vertical" className="" />
				</div>
				<div className="w-5/6 pt-10">{children}</div>
			</div>
		</NavbarMenuLayout>
	);
};

export default CourseNavbarSidebarLayout;
