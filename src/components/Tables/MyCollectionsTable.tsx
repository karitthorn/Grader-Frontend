import { ColumnDef } from '@tanstack/react-table'
import { FileSpreadsheet, Folder } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CollectionPopulateCollectionProblemPopulateProblemModel } from '../../types/models/Collection.model'
import { readableDateFormat } from '../../utilities/ReadableDateFormat'
import { DataTable } from '../DataTable'

const columns: ColumnDef<CollectionPopulateCollectionProblemPopulateProblemModel>[] = [
    {
        accessorKey: "name",
        header: "Title",
        cell: ({ row }) => (
            <div className="flex items-center font-medium py-2">
                <Folder className="mr-2 text-yellow-400" size={20} />
                <Link to={`/my/collections/${row.original.collection_id}/edit`}>
                    {row.original.name}
                </Link>
            </div>
        )
    },
    {
        accessorKey: "problems",
        header: "Problems",
        cell: ({ row }) => (
            <div className='flex items-center font-medium'>
                <FileSpreadsheet className="mr-2 text-blue-400" size={20} />
                {row.original.problems.length}
            </div>
        )
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
]

const MyCollectionsTable = ({
    collections=[]
}:{
    collections?: CollectionPopulateCollectionProblemPopulateProblemModel[]
}) => {
  return (
    <div>
        <DataTable
            columns={columns}
            data={collections}
        />
    </div>
  )
}

export default MyCollectionsTable