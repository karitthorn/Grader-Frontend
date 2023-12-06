import React, { useEffect, useState } from "react";
import { CreateCollectionRequestForm } from "../../../types/forms/CreateCollectionRequestForm";
import { ReactSortable } from "react-sortablejs";
import { Button } from "../../shadcn/Button";
import AddProblemDialog from "../../AddProblemDialog";
import { Separator } from "../../shadcn/Seperator";
import { Input } from "../../shadcn/Input";
import { ProblemService } from "../../../services/Problem.service";
import {
	ProblemModel,
	ProblemSecureModel,
} from "../../../types/models/Problem.model";
import { ItemInterface } from "./../../../../node_modules/react-sortablejs/dist/index.d";
import MyProblemCard from "../../MyProblemCard";
import MyCardContainer from "../../MyCardContainer";
import SortableMyCardContainer from "../../SortableMyCardContainer";

const ManageProblems = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateCollectionRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateCollectionRequestForm>
	>;
}) => {
	createRequest;
	setCreateRequest;

	// const [state, setState] = useState([
	// 	{ id: 1, name: "shrek" },
	// 	{ id: 2, name: "fiona" },
	// ]);

	const [allProblemsSortable2, setAllProblemsSortable2] = useState<
		ItemInterface[]
	>([]);
	const [allProblemsSortable, setAllProblemsSortable] = useState<
		ItemInterface[]
	>([]);
	const [allProblems, setAllProblems] = useState<
		ProblemSecureModel[] | ProblemModel[]
	>([]);

	useEffect(() => {
		ProblemService.getAllByAccount(1).then((response) => {
			console.log(response.data.problems);
			setAllProblems(response.data.problems);
			setAllProblemsSortable(
				response.data.problems.map((problem) => ({
					id: problem?.problem_id,
					name: problem?.title,
				}))
			);
			setAllProblemsSortable2(
				response.data.problems.map((problem) => ({
					id: problem?.problem_id,
					name: problem?.title,
				}))
			);
		});
	}, []);

	return (
		<div>
			<div className="flex justify-between">
				<h1 className="text-2xl font-bold">Manage Problems</h1>

				<Button>Add Problems</Button>
			</div>

			<div className="flex">
				<div className="w-1/2">
					<div className="mt-6 h-[80vh] pr-5 overflow-y-scroll">
						<div className="grid gap-y-3">
							<SortableMyCardContainer
								animation={150}
								group="shared"
								list={allProblemsSortable2}
								setList={setAllProblemsSortable2}
							>
								{allProblemsSortable2.map((item) => (
									<MyProblemCard
										key={item.id}
										problem={
											allProblems.find(
												(problem) =>
													problem.problem_id ===
													item.id
											) as
												| ProblemModel
												| ProblemSecureModel
										}
									/>
								))}
							</SortableMyCardContainer>
						</div>
					</div>
				</div>

				<div className="mx-3">
					<Separator orientation="vertical" />
				</div>

				<div className="">
					<Input />

					<SortableMyCardContainer
						group={{
							name: "shared",
							pull: "clone",
							put: false,
						}}
						animation={150}
						sort={false}
						list={allProblemsSortable}
						setList={setAllProblemsSortable}
					>
						{allProblemsSortable.map((item) => (
								<MyProblemCard
									key={item.id}
									problem={
										allProblems.find(
											(problem) =>
												problem.problem_id === item.id
										) as ProblemModel | ProblemSecureModel
									}
								/>
							))}
					</SortableMyCardContainer>
							
						
				</div>
			</div>
		</div>
	);
};

export default ManageProblems;
