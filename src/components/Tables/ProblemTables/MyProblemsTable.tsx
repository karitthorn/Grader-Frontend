import { ColumnDef } from "@tanstack/react-table";
import {
	FileSpreadsheet,
	MoreHorizontal,
	Tally4,
	Timer
} from "lucide-react";
import { Link } from "react-router-dom";
import { ProgrammingLanguageOptions } from "../../../constants/ProgrammingLanguage";
import { ProblemPopulateTestcases } from "../../../types/models/Problem.model";
import { checkRuntimeStatus } from "../../../utilities/CheckRuntimeStatus";
import { readableDateFormat } from "../../../utilities/ReadableDateFormat";
import CheckBadge from "../../CheckBadge";
import { DataTable } from "../../DataTable";
import MyProblemDropdown from "../../Dropdowns/MyProblemDropdown";

const columns: ColumnDef<ProblemPopulateTestcases>[] = [
	{
		accessorKey: "title",
		header: "Title",
		cell: ({ row }) => {
			console.log(row.original.allowed_languages);

			return (
				<div className="font-mono flex items-center py-2">
					<FileSpreadsheet className="mr-2 text-blue-400" size={20} />
					<Link to={`/my/problems/${row.original.problem_id}/edit`}>
						{row.original.title}
					</Link>
				</div>
			);
		},
	},

	{
		accessorKey: "testcases",
		header: "Testcases",
		cell: ({ row }) => (
			<div className="font-medium">
				<Tally4
					className="inline-block text-green-400 mr-2"
					size={20}
				/>
				{row.original.testcases.length}
			</div>
		),
	},

	{
		accessorKey: "time_limit",
		header: "Time Limit",
		cell: ({ row }) => (
			<div className="font-medium">
				<Timer className="inline-block mr-2" size={20} />
				{row.original.time_limit}
			</div>
		),
	},

	{
		accessorKey: "testcases",
		header: "Status",
		cell: ({ row }) => {
			return (
				<div className="">
					<CheckBadge checked={row.original.solution !== ""}>
						Source Code
					</CheckBadge>
					<span className="mx-1">
						<CheckBadge checked={row.original.testcases.length > 0}>
							Testcases
						</CheckBadge>
					</span>
					<CheckBadge
						checked={checkRuntimeStatus(row.original.testcases)}
					>
						No Runtime Error
					</CheckBadge>
				</div>
			);
		},
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
		accessorKey: "updated_date",
		header: "Updated Date",
		cell: ({ row }) => (
			<div className="font-mono">
				{readableDateFormat(row.original.updated_date)}
			</div>
		),
	},
	{
		accessorKey: "created_date",
		header: "Created Date",
		cell: ({ row }) => (
			<div className="font-mono">
				{readableDateFormat(row.original.created_date)}
			</div>
		),
	},
	{
		accessorKey: "action",
		header: "Action",
		cell: ({ row }) => (
			<div className=" flex items-center">
				<MyProblemDropdown problem={row.original}>
					<MoreHorizontal size={20} />
				</MyProblemDropdown>
			</div>
		),
	},
];

const MyProblemsTable = ({
	problems,
}: {
	problems: ProblemPopulateTestcases[];
}) => {
	return (
		<div>
			<DataTable columns={columns} data={problems} />
		</div>
	);
};

export default MyProblemsTable;
