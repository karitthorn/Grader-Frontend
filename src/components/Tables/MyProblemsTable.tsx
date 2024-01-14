import React from 'react'
import { ProblemPopulateTestcases } from '../../types/models/Problem.model'
import { ColumnDef } from "@tanstack/react-table"
import { Table } from '../shadcn/Table'
import { DataTable } from '../DataTable'
import { readableDateFormat } from '../../utilities/ReadableDateFormat'
import { FileSpreadsheet } from 'lucide-react'
import { Link } from 'react-router-dom'

const columns: ColumnDef<ProblemPopulateTestcases>[] = [
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => {

            console.log(row.original.allowed_languages)

            return (
                <div className='font-mono flex items-center'>
                    <FileSpreadsheet className='mr-2 text-blue-400' size={20} />
                    <Link to={`/my/problems/${row.original.problem_id}/edit`}>
                        {row.original.title}
                    </Link>
                </div>
            )
        }
    },
    {
        accessorKey: "updated_date",
        header: "Updated Date",
        cell: ({ row }) => (
            <div>{readableDateFormat(row.original.updated_date)}</div>
        )
    },
]

const MyProblemsTable = ({
    problems
}:{
    problems: ProblemPopulateTestcases[]
}) => {
  return (
    <div>
        <DataTable
            columns={columns}
            data={problems}
        />
    </div>
  )
}

export default MyProblemsTable