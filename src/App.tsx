import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./router";
import { AuthService } from "./services/Auth.service";
import { LoginContext } from "./contexts/LoginContext";

function App() {
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		console.log("OKๅ")
		
		const token = localStorage.getItem("token");
		const account_id = Number(localStorage.getItem("account_id"));

		if (!token || !account_id) {
			return;
		}

		console.log("OK")
		AuthService.authorize({ token, account_id }).then((response) => {
			console.log(response);
			if (response.data.result) {
				setIsLogin(true);
			}
		});
	},[]);

	return (
		<div>
			<div className="App">
				<LoginContext.Provider value={{isLogin, setIsLogin}}>
					<Router />
				</LoginContext.Provider>
			</div>
		</div>
	);
}

export default App;
