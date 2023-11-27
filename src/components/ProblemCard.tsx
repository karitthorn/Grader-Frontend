import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import { Button } from "./shadcn/Button";
import { Check, CheckCircle2, X } from "lucide-react";

const ProblemCard = () => {
	const [toolVisible, setToolVisible] = useState(true);

	return (
		<Card
			onMouseOver={() => setToolVisible(true)}
			onMouseOut={() => setToolVisible(false)}
			className="pt-6 px-5"
		>
			{/* <div className="flex justify-between">
				<div>
					<CardTitle>Problem Name</CardTitle>
				</div>
			</div> */}
			<CardContent>
				<div className="flex justify-between">
					<div className="flex justify-between w-5/6 items-center">
						<h1 className="font-bold">Problem Name</h1>
						<div className="text-base text-gray-400">Last Updated: 12/34/2123</div>
						<div className="flex justify-between gap-10 text-base">
							<div className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-400" /> Source Code</div>
							<div className="flex items-center"><X className="mr-2 h-4 w-4 text-green-400" /> Testcases</div>
							<div className="flex items-center"><Check className="mr-2 h-4 w-4 text-green-400" /> No Runtime Error</div>
						</div>
					</div>
					<div
						className={
							"flex gap-2 " + (toolVisible ? "" : "invisible")
						}
					>
						<Button>View</Button>
						<Button>Edit</Button>
						<Button>Delete</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default ProblemCard;
