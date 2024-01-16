import { ArrowUpDown } from "lucide-react";
import { ReactNode } from "react";

const DataTableSortableLayout = ({children,onClick=()=>{}}:{
    children?: ReactNode
    onClick?:()=>void
}) => {
	return (
		<div
			className="flex items-center cursor-pointer"
			onClick={() => onClick()}
		>
			{children}
			<ArrowUpDown className="ml-2 h-4 w-4" />
		</div>
	);
};

export default DataTableSortableLayout;
