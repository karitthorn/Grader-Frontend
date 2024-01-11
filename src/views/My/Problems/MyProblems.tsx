import React, { useContext, useEffect, useState } from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { Input } from "../../../components/shadcn/Input";
import { Button } from "../../../components/shadcn/Button";
import { Card, CardContent, CardTitle } from "../../../components/shadcn/Card";
import MyProblemCard from "../../../components/Cards/ProblemCards/MyProblemCard";
import { useNavigate } from "react-router-dom";
import { ProblemService } from "../../../services/Problem.service";
import { ProblemModel, ProblemPopulateTestcases } from "../../../types/models/Problem.model";
import CardContainer from "../../../components/CardContainer";
import { NavSidebarContext } from "../../../contexts/NavSidebarContext";
import DeleteProblemConfirmationDialog from "../../../components/DeleteProblemConfirmationDialog";
import { FilePlus } from "lucide-react";
import { Tabs,TabsList, TabsTrigger } from "../../../components/shadcn/Tabs";

const MyProblems = () => {
	const accountId = String(localStorage.getItem("account_id"));
	const navigate = useNavigate();

	const [problems, setProblems] = useState<ProblemPopulateTestcases[]>([]);
	const [manageableProblems, setManageableProblems] = useState<ProblemPopulateTestcases[]>([]);
	const [filteredProblems, setFilteredProblems] = useState<ProblemPopulateTestcases[]>([]);
	const [filteredManageableProblems, setFilteredManageableProblems] = useState<ProblemPopulateTestcases[]>([]);
	
	const {section,setSection} = useContext(NavSidebarContext)

	const [tabValue, setTabValue] = useState("personal")
	const [searchValue, setSearchValue] = useState("")

	useEffect(() => {
		if (!searchValue || searchValue === "") {
			setFilteredProblems(problems)
			setFilteredManageableProblems(manageableProblems)
		}
		else {
			setFilteredProblems(problems.filter((problem) => problem.title.toLowerCase().includes(searchValue.toLowerCase())))
			setFilteredManageableProblems(manageableProblems.filter((problem) => problem.title.toLowerCase().includes(searchValue.toLowerCase())))
		}
	},[searchValue,problems,manageableProblems])

	useEffect(() => {
		ProblemService.getAllAsCreator(accountId).then((response) => {
			setProblems(response.data.problems);
			setManageableProblems(response.data.manageable_problems)
		});

		setSection("PROBLEMS")
	}, [accountId]);

	return (
		<NavbarSidebarLayout>
			<div className="w-[96%] mx-auto mt-10">
				<div className="flex justify-between gap">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">
							My Problems
						</h1>
					</div>
					<div className="w-7/12 md:w-5/12">
						<Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search ..." />
					</div>
					<div>
						<Tabs value={tabValue} onValueChange={(e) => setTabValue(e)}>
							<TabsList>
								<TabsTrigger value="personal">
									Personal
								</TabsTrigger>
								<TabsTrigger value="manageable">
									Manageable
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>
					<div>
						<Button onClick={() => navigate("/my/problems/create")}>
							<FilePlus size={20} className="mr-2" />
							Create Problem
						</Button>
					</div>
				</div>

				<CardContainer>
					{tabValue === "personal" && filteredProblems.map((problem, index) => (
						<MyProblemCard problem={problem} key={index} />
					))}
					{tabValue === "manageable" && filteredManageableProblems.map((problem, index) => (
						<MyProblemCard problem={problem} key={index} />
					))}
				</CardContainer>
			</div>
		</NavbarSidebarLayout>
	);
};

export default MyProblems;
