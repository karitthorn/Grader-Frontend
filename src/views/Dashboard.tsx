import React, { useEffect, useState } from "react";
import NavbarSidebarLayout from "../layout/NavbarSidebarLayout";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import { SubmissionService } from "../services/Submission.service";
import { SubmissionPopulateSubmissionTestcaseAndProblemSecureModel } from "../types/models/Submission.model";
import SubmissionCard from "../components/SubmissionCard";

const Dashboard = () => {
	const accountId = String(localStorage.getItem("account_id"));
  const username = localStorage.getItem("username");

	const [previousAttemptedProblems, setPreviousAttemptedProblems] = useState<
		SubmissionPopulateSubmissionTestcaseAndProblemSecureModel[]
	>([]);

	useEffect(() => {
		SubmissionService.getAll({
			account_id: accountId,
			sort_date: 1,
			start: 0,
			end: 4,
		}).then((response) => {
			setPreviousAttemptedProblems(response.data.submissions);
		});
	}, []);

	return (
		<NavbarMenuLayout xPad={false}>
			<div className="mt-10 w-[90%] mx-auto">
				<p className="text-4xl font-bold">
					Welcome back,{" "}
					<span className="text-green-600">{username}</span>
				</p>

				<p className="text-3xl font-bold">Previous Attempted</p>

				<div className="grid grid-cols-4 gap-4">
					{previousAttemptedProblems.map((submission, index) => (
						<div className="">
							<SubmissionCard
								key={index}
								submission={submission}
							/>
						</div>
					))}
				</div>

        <p className="text-3xl font-bold">Courses</p>
			</div>
		</NavbarMenuLayout>
	);
};

export default Dashboard;
