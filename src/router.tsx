import { Route, Routes, useNavigate } from "react-router-dom";
import CourseManagement from "./views/CourseManagement";
import Dashboard from "./views/Dashboard";
import ExploreCourses from "./views/ExploreCourses";
import ExploreProblems from "./views/ExploreProblems";
import Home from "./views/Home";
import Login from "./views/Login";
import CreateCollection from "./views/My/Collections/CreateCollection";
import EditCollection from "./views/My/Collections/EditCollection";
import MyCollections from "./views/My/Collections/MyCollections";
import CreateCourse from "./views/My/Courses/CreateCourse";
import EditCourse from "./views/My/Courses/EditCourse";
import MyCourses from "./views/My/Courses/MyCourses";
import CreateGroup from "./views/My/Groups/CreateGroup";
import EditGroup from "./views/My/Groups/EditGroup";
import MyGroups from "./views/My/Groups/MyGroups";
import CreateProblem from "./views/My/Problems/CreateProblem";
import EditProblem from "./views/My/Problems/EditProblem";
import MyProblems from "./views/My/Problems/MyProblems";
import Register from "./views/Register";
import ViewCourse from "./views/ViewCourse";
import ViewCourseProblem from "./views/ViewCourseProblem";
import ViewProblem from "./views/ViewProblem";
import { useContext, useEffect } from "react";
import { LoginContext } from "./contexts/LoginContext";

const Router = () => {

	const navigate = useNavigate();
	const {isLogin} = useContext(LoginContext);
	useEffect(() => {
		if (isLogin !== null && !isLogin) {
			navigate("/login")
		}
	},[isLogin])

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/explore" element={<ExploreProblems />} />
			<Route path="/courses" element={<ExploreCourses />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />

			{isLogin && (<>
			<Route path="/dashboard" element={<Dashboard />} />
			<Route path="/management" element={<CourseManagement />} />

			<Route path="/my/problems" element={<MyProblems />} />
			<Route path="/my/problems/create" element={<CreateProblem />} />
			<Route path="/my/problems/:problemId/edit" element={<EditProblem />} />

			<Route path="/my/collections" element={<MyCollections />} />
			<Route path="/my/collections/create" element={<CreateCollection />} />
			<Route path="/my/collections/:collectionId/edit" element={<EditCollection />} />

			<Route path="/my/courses" element={<MyCourses />} />
			<Route path="/my/courses/create" element={<CreateCourse />} />
			<Route path="/my/courses/:courseId/edit" element={<EditCourse />} />

			<Route path="/my/groups" element={<MyGroups />} />
			<Route path="/my/groups/create" element={<CreateGroup />} />
			<Route path="/my/groups/:groupId/edit" element={<EditGroup />} />
			
			<Route path="/problems/:problemId" element={<ViewProblem />} />
			<Route path="/courses/:courseId" element={<ViewCourse />} />
			<Route path="/courses/:courseId/problems/:problemId" element={<ViewCourseProblem />} />
			</>)}
			
		</Routes>
	);
};

export default Router;