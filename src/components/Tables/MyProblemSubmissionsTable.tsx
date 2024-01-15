import React from "react";
import { SubmissionPopulateSubmissionTestcaseAndAccountModel } from "../../types/models/Submission.model";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../DataTable";
import TestcasesGradingIndicator from "../TestcasesGradingIndicator";
import { readableDateFormat } from "../../utilities/ReadableDateFormat";
import { ProgrammingLanguageOptions } from "../../constants/ProgrammingLanguage";
import { Button } from "../shadcn/Button";
import { Maximize, Maximize2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../shadcn/Dialog";
import ProblemSubmissionSourceCodeAndRuntimeResultDialog from "../Dialogs/ProblemSubmissionSourceCodeAndRuntimeResultDialog";
import { ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel } from "../../types/models/Problem.model";



const MyProblemSubmissionsTable = ({
	submissions = [],
    problem
}: {
	submissions?: SubmissionPopulateSubmissionTestcaseAndAccountModel[];
    problem: ProblemPopulateAccountAndTestcasesAndProblemGroupPermissionsPopulateGroupModel
}) => {

    const columns: ColumnDef<SubmissionPopulateSubmissionTestcaseAndAccountModel>[] =
	[
		{
			accessorKey: "username",
			header: "Username",
			cell: ({ row }) => (
				<div className="font-medium py-2">
					{row.original.account.username}
				</div>
			),
		},
		{
			accessorKey: "language",
			header: "Language",
			cell: ({ row }) => (
				<div className="font-medium py-2">
					{
						ProgrammingLanguageOptions.find(
							(language) =>
								language.value === row.original.language
						)?.badge
					}
				</div>
			),
		},
		{
			accessorKey: "runtime_result",
			header: "Runtime Result",
			cell: ({ row }) => (
				<div className="font-medium">
					<TestcasesGradingIndicator
						sizeX={1.5}
						sizeY={3}
						submissionTestcases={row.original.runtime_output}
					/>
				</div>
			),
		},
		{
			accessorKey: "date",
			header: "Submitted Date",
			cell: ({ row }) => (
				<div className="">{readableDateFormat(row.original.date)}</div>
			),
		},
		{
			accessorKey: "action",
			header: "",
			cell: ({ row }) => (
				<div>
					<ProblemSubmissionSourceCodeAndRuntimeResultDialog
                        submission={row.original}
                        problem={problem}
                    >
						<Button>
							<Maximize2 size={15} className="mr-2" />
							View More
						</Button>
					</ProblemSubmissionSourceCodeAndRuntimeResultDialog>
				</div>
			),
		},
	];

	return (
		<div>
			<DataTable columns={columns} data={submissions} />
		</div>
	);
};

export default MyProblemSubmissionsTable;
