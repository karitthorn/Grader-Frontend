import React from "react";
import NavbarMenuLayout from "./NavbarMenuLayout";
import CourseNavSidebar from "../components/NavigationBar/CourseNavSidebar";
import { Separator } from "../components/shadcn/Seperator";

const CourseNavbarSidebarLayout = ({
	children
}: {
	children?: React.ReactNode;
}) => {
	return (
		<NavbarMenuLayout xPad={false} yPad={false}>
			<div className="flex">
				<CourseNavSidebar />
				<div>
					<Separator orientation="vertical" className="" />
				</div>
				<div className="w-full pt-10">{children}</div>
			</div>
		</NavbarMenuLayout>
	);
};

export default CourseNavbarSidebarLayout;
