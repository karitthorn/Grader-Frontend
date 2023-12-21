import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Router from "./router";
import { AuthService } from "./services/Auth.service";
import { LoginContext } from "./contexts/LoginContext";
import { Toaster } from "./components/shadcn/Toaster";
import { NavSidebarContext } from "./contexts/NavSidebarContext";
import { CourseNavSidebarContext, getCourseNavSidebarContextStateValue } from "./contexts/CourseNavSidebarContexnt";
import { TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "./types/models/Topic.model";

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const [section, setSection] = useState("");
	const [isOpenNavSidebar, setIsOpenNavSidebar] = useState(false);

	const [course, setCourse] = useState<TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel>();
	const [isOpenCourseNavSidebar, setIsOpenCourseNavSidebar] = useState(false);
	const [courseSection, setCourseSection] = useState("");

	useEffect(() => {
		const token = localStorage.getItem("token");
		const account_id = Number(localStorage.getItem("account_id"));

		if (!token || !account_id) {
			return;
		}

		AuthService.authorize({ token, account_id }).then((response) => {
			if (response.data.result) {
				setIsLogin(true);
			}
		});
	}, []);

	return (
		<div>
			<div className="App">
				<LoginContext.Provider value={{ isLogin, setIsLogin }}>
					<NavSidebarContext.Provider
						value={{
							section,
							setSection,
							isOpen: isOpenNavSidebar,
							setIsOpen: setIsOpenNavSidebar,
						}}
					>
						<CourseNavSidebarContext.Provider
							value = {getCourseNavSidebarContextStateValue()}
						>
							<Router />
							<Toaster />
						</CourseNavSidebarContext.Provider>
					</NavSidebarContext.Provider>
				</LoginContext.Provider>
			</div>
		</div>
	);
}

export default App;
