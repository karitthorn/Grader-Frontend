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
import { InferProps, any } from "prop-types";


export const NavbarMenuLayout = ({ children, yPad=true, xPad=true }:{
    children: React.ReactNode,
    yPad?: boolean,
    xPad?: boolean
}) => {
	return (
		<div>
            <div className="z-50 fixed w-full">
                <NavigationBar/>
            </div>
            <div className={(yPad ? "pt-10" : "") + " " + (xPad ? "pl-10" : "")}>
			    {children}
            </div>
		</div>
	);
};

export default NavbarMenuLayout;
