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


export const NavbarMenuLayout = ({ children, padding=true }:any) => {
	return (
		<div>
            <div className="z-50 fixed w-full">
                <NavigationBar/>
            </div>
            <div className={padding ? "pt-10" : ""}>
			    {children}
            </div>
		</div>
	);
};

NavbarMenuLayout.propTypes = {
    children: any,
    padding: Boolean,
}

export default NavbarMenuLayout;
