import { createContext } from "react";

export type NavSidebarContextType = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    section: string;
    setSection: React.Dispatch<React.SetStateAction<string>>;
}

const iNavSidebarContextState: NavSidebarContextType = {
    isOpen: true,
    setIsOpen: () => {},
    section: "",
    setSection: () => {},
}

export const NavSidebarContext = createContext<NavSidebarContextType>(iNavSidebarContextState);