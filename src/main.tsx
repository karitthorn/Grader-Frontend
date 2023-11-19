import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TooltipProvider } from "./components/plate-ui/tooltip.tsx";
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
	// <React.StrictMode>
	<BrowserRouter>
		<TooltipProvider>
			<App />
		</TooltipProvider>
	</BrowserRouter>
	// </React.StrictMode>,
);
