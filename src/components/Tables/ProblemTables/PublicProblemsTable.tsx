import { ColumnDef } from "@tanstack/react-table";
import {
	FileSpreadsheet,
	Puzzle
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProgrammingLanguageOptions } from "../../../constants/ProgrammingLanguage";
import {
	ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel
} from "../../../types/models/Problem.model";
import { readableDateFormat } from "../../../utilities/ReadableDateFormat";
import { DataTable } from "../../DataTable";
import TestcasesGradingIndicator from "../../TestcasesGradingIndicator";
import { Button } from "../../shadcn/Button";

const columns: ColumnDef<ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel>[] =
	[
		{
			accessorKey: "title",
			header: "Title",
			cell: ({ row }) => {
				console.log(row.original.allowed_languages);

				return (
					<div className="font-mono flex items-center">
						<FileSpreadsheet
							className="mr-2 text-blue-400"
							size={20}
						/>
						<Link to={`/problems/${row.original.problem_id}`}>
							{row.original.title}
						</Link>
					</div>
				);
			},
		},

		{
			accessorKey: "author",
			header: "Author",
			cell: ({ row }) => (
				<div className="font-medium">
					{row.original.creator.username}
				</div>
			),
		},
		{
			accessorKey: "allowed_languages",
			header: "Allowed Languages",
			cell: ({ row }) => (
				<div className="font-medium">
					{row.original.allowed_languages.split(",").map((lang) => (
						<span className="mx-0.5">
							{
								ProgrammingLanguageOptions.find(
									(option) => option.value === lang
								)?.badge
							}
						</span>
					))}
				</div>
			),
		},
		{
			accessorKey: "best_submissions",
			header: "Best Submissions",
			cell: ({ row }) => (
				<div className="">
					<TestcasesGradingIndicator
						submissionTestcases={
							row.original.best_submission?.runtime_output
						}
						sizeX={1.5}
						sizeY={3}
					/>
				</div>
			),
		},

		{
			accessorKey: "updated_date",
			header: "Updated Date",
			cell: ({ row }) => (
				<div className="">
					{readableDateFormat(row.original.updated_date)}
				</div>
			),
		},

		{
			accessorKey: "action",
			header: "",
			cell: ({ row }) => (
				<div className="flex items-center">
					<Link to={`/problems/${row.original.problem_id}`}>
						<Button

						// onClick={() =>
						// 	navigate(`/problems/${problem.problem_id}`)
						// }
						// className="bg-white border-green-500 border-2 text-green-500 hover:bg-green-500 hover:text-white"
						>
							<Puzzle className="mr-2" />
							Solve This Problem
						</Button>
					</Link>
				</div>
			),
		},
	];

const PublicProblemsTable = ({
	problems,
}: {
	problems: ProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[];
}) => {
	return (
		<div>
			<DataTable columns={columns} data={problems} />
		</div>
	);
};

export default PublicProblemsTable;
