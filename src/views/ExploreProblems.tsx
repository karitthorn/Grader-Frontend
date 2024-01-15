import { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import PublicProblemCard from "../components/Cards/ProblemCards/PublicProblemCard";
import { Separator } from "../components/shadcn/Seperator";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import { ProblemService } from "../services/Problem.service";
import { ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Problem.model";
import PublicProblemsTable from "../components/Tables/ProblemTables/PublicProblemsTable";

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
					<CardContainer className="w-4/4">
						{/* {problems.map((problem) => (
							<PublicProblemCard problem={problem} />
						))} */}
					<PublicProblemsTable
						problems={problems}
					/>
					</CardContainer>
          <Separator orientation="vertical"/>
				</div>
			</div>
		</NavbarMenuLayout>
	);
};

export default ExploreProblems;
