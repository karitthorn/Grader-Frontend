import React, { useEffect, useState } from "react";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import PublicProblemCard from "../components/PublicProblemCard";
import CardContainer from "../components/CardContainer";
import { ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Problem.model";
import { ProblemService } from "../services/Problem.service";
import { Separator } from "../components/shadcn/Seperator";

const ExploreProblems = () => {
	const [problems, setProblems] = useState<
		ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[]
	>([]);

	useEffect(() => {
		ProblemService.getAll().then((response) => {
      console.log('prob',response.data.problems)
			setProblems(response.data.problems);
		});
	}, []);

	return (
		<NavbarMenuLayout>
			<div className="mx-auto w-[90%] mt-10">
				<h1 className="text-3xl font-bold">Explore Public Problems</h1>
				<div>
					<CardContainer className="w-3/4">
						{problems.map((problem) => (
							<PublicProblemCard problem={problem} />
						))}
					</CardContainer>
          <Separator orientation="vertical"/>
				</div>
			</div>
		</NavbarMenuLayout>
	);
};

export default ExploreProblems;
