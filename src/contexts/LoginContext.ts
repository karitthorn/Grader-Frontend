import { createContext } from "react";

export type LoginContextType = {
	isLogin: boolean | null;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean|null>>; 
}

const iLoginContextState: LoginContextType = {
	isLogin: null,
	setIsLogin: () => {},
}

export const LoginContext = createContext<LoginContextType>(iLoginContextState);