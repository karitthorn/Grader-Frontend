import { createContext } from "react";

export type LoginContextType = {
	isLogin: boolean;
	setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const iLoginContextState: LoginContextType = {
	isLogin: false,
	setIsLogin: () => {},
}

export const LoginContext = createContext<LoginContextType>(iLoginContextState);