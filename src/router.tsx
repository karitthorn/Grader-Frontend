import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import CourseManagement from "./views/CourseManagement";
import CreateProblem from "./views/My/Problems/CreateProblem";
import MyProblems from "./views/My/Problems/MyProblems";
import ViewProblem from "./views/ViewProblem";
import MyCollections from "./views/My/Collections/MyCollections";
import EditProblem from "./views/My/Problems/EditProblem";
import CreateCollection from "./views/My/Collections/CreateCollection";
import ExploreProblems from "./views/ExploreProblems";
import EditCollection from "./views/My/Collections/EditCollection";
import MyCourses from "./views/My/Courses/MyCourses";
import CreateCourse from "./views/My/Courses/CreateCourse";
import EditCourse from "./views/My/Courses/EditCourse";
import ExploreCourses from "./views/ExploreCourses";
import ViewCourse from "./views/ViewCourse";
import ViewCourseProblem from "./views/ViewCourseProblem";
import Dashboard from "./views/Dashboard";
import MyGroups from "./views/My/Groups/MyGroups";
import CreateGroup from "./views/My/Groups/CreateGroup";
import EditGroup from "./views/My/Groups/EditGroup";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/explore" element={<ExploreProblems />} />
			<Route path="/courses" element={<ExploreCourses />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
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
		</Routes>
	);
};

export default Router;
