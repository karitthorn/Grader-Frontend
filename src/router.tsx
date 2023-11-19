import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import CourseManagement from "./views/CourseManagement";
import CreateProblem from "./views/My/Problem/CreateProblem";

const Router = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/management" element={<CourseManagement />} />
			<Route path="/my/problems/create" element={<CreateProblem />} />
		</Routes>
	);
};

export default Router;
