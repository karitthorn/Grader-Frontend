import React from "react";
import { Props } from "../types/Props";
import { 
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
 } from "../components/shadcn/NevigationMenu";
import { cn } from "../lib/utils";
import NavigationBar from "../components/NavigationBar";



const NavbarMenuLayout = ({ children }: Props) => {
	return (
		<div>
            <div className="z-50 border-2 fixed w-full">
                <NavigationBar/>
            </div>
			{children}
		</div>
	);
};

export default NavbarMenuLayout;
