import React from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { Input } from "../../../components/shadcn/Input";
import { Button } from "../../../components/shadcn/Button";
import { Card, CardContent, CardTitle } from "../../../components/shadcn/Card";
import ProblemCard from "../../../components/ProblemCard";
import { useNavigate } from "react-router-dom";

const MyProblems = () => {
	
  const navigate = useNavigate();

  return (
		<NavbarSidebarLayout>
			<div className="w-[96%] mx-auto mt-10">
				<div className="flex justify-between gap">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">
							My Problems
						</h1>
					</div>
					<div className="w-9/12">
						<Input placeholder="Search ..." />
					</div>
					<div>
						<Button
              onClick={() => navigate("/my/problems/create")}
            >Create Problem</Button>
					</div>
				</div>

				<div className="grid gap-y-3 mt-6 h-[80vh] pr-5 overflow-y-scroll">
					<ProblemCard />
					<ProblemCard />
					<ProblemCard />
					<ProblemCard />
					<ProblemCard />
          			<ProblemCard />
					<ProblemCard />
					<ProblemCard />
					<ProblemCard />
					<ProblemCard />
				</div>
			</div>
		</NavbarSidebarLayout>
	);
};

export default MyProblems;
