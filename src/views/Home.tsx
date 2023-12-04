import React from "react";
import { Button } from "../components/shadcn/Button";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import DataTable from "../components/DataTable";
import { TableCell, TableRow } from "../components/shadcn/Table";
import PlateEditor from "../components/PlateEditor";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@radix-ui/react-tooltip";
import CenterContainer from "../layout/CenterLayout";
import { Card, CardContent, CardTitle } from "../components/shadcn/Card";
import { FileSpreadsheet } from "lucide-react";

const Home = () => {
	return (
		<CenterContainer>
			<h1 className="mx-auto text-6xl font-bold">
				Welcome to <span className="text-green-500">Grader</span>
			</h1>

			{/* <Card className="w-1/2 p-5">
				<CardTitle className="flex text-5xl font-bold items-center justify-center">
					<FileSpreadsheet size={100} className="text-green-500"/> Solve The Problem
				</CardTitle>
			</Card> */}

		</CenterContainer>
	);
};

export default Home;
