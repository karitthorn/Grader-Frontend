import React, { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "./shadcn/Dialog";
import { Input } from "./shadcn/Input";
import MyProblemCard from "./MyProblemCard";
import {
	ProblemModel,
	ProblemSecureModel,
} from "../types/models/Problem.model";
import { ProblemService } from "../services/Problem.service";

const AddProblemDialog = ({ children }: { children: React.ReactNode }) => {
	const [problems, setProblems] = useState<
		ProblemSecureModel[] | ProblemModel[]
	>([]);

	useEffect(() => {
		ProblemService.getAllAsCreator(4).then((response) => {
			setProblems(response.data.problems);
		});
	});

	return (
		<Dialog>
			<DialogTrigger asChild>{children}</DialogTrigger>
			<DialogContent className="min-w-[80%]">
				<h1 className="text-3xl font-bold">Add Problem</h1>
				<Input />

				<div className="h-[50vh] overflow-y-scroll">
					{problems.map((problem) => (
						<MyProblemCard problem={problem} />
					))}
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default AddProblemDialog;
