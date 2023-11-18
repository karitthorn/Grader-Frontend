import React from "react";
import { Button } from "../components/shadcn/Button";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import DataTable from "../components/DataTable";
import { TableCell, TableRow } from "../components/shadcn/Table";
import PlateEditor from "../components/plate-editor";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
const invoices = [
	{
		invoice: "INV001",
		paymentStatus: "Paid",
		totalAmount: "$250.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV002",
		paymentStatus: "Pending",
		totalAmount: "$150.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV003",
		paymentStatus: "Unpaid",
		totalAmount: "$350.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV004",
		paymentStatus: "Paid",
		totalAmount: "$450.00",
		paymentMethod: "Credit Card",
	},
	{
		invoice: "INV005",
		paymentStatus: "Paid",
		totalAmount: "$550.00",
		paymentMethod: "PayPal",
	},
	{
		invoice: "INV006",
		paymentStatus: "Pending",
		totalAmount: "$200.00",
		paymentMethod: "Bank Transfer",
	},
	{
		invoice: "INV007",
		paymentStatus: "Unpaid",
		totalAmount: "$300.00",
		paymentMethod: "Credit Card",
	},
];
const Home = () => {
	return (
		<NavbarMenuLayout>
			<h1 className="border-2">Home</h1>
			<Button>Click</Button>
			<TooltipProvider>
				<Tooltip>
					
				</Tooltip>
			</TooltipProvider>
			<PlateEditor />
			{/* <div className="mx-32 border-2">
				< DataTable>
					{invoices.map((invoice) => (
						<TableRow key={invoice.invoice}>
							<TableCell className="font-medium">
								{invoice.invoice}
							</TableCell>
							<TableCell>{invoice.paymentStatus}</TableCell>
							<TableCell>{invoice.paymentMethod}</TableCell>
							<TableCell className="text-right">
								{invoice.totalAmount}
							</TableCell>
						</TableRow>
					))}
				</DataTable>
			</div> */}
		</NavbarMenuLayout>
	);
};

export default Home;
