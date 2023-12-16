import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import { Button } from "./shadcn/Button";
import { Check, CheckCircle2, FileSpreadsheet, Folder, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProblemModel } from "../types/models/Problem.model";
import { readableDateFormat } from "../utilities/ReadableDateFormat";
import Checkmark from "./Checkmark";
import { CollectionProblemModel, CollectionProblemPopulateProblemSecureModel, GetCollectionByAccountResponse } from "../types/models/Collection.model";

const MyCollectionCard = ({
	collection
}:{
	collection: CollectionProblemModel
}) => {
	const navigate = useNavigate();

	const [highlightTitle, setHighlightTitle] = useState(false);
	const [toolVisible, setToolVisible] = useState(true);

	const handleMouseOver = () => {
		setHighlightTitle(true);
		setToolVisible(true);
	};

	const handleMouseOut = () => {
		setHighlightTitle(false);
		setToolVisible(false);
	};

	return (
		<Card
			onClick={() => navigate(`/my/collections/${collection.collection_id}`)}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
			className={`pt-6 px-5 cursor-pointer ${
				highlightTitle ? "border-green-500 bg-green-100" : ""
			}`}
		>
			<CardContent>
				<div className="flex items-center font-bold mb-2">
					<Folder className="text-yellow-400 mr-2" />
					{highlightTitle ? (
						<h1 className="text-green-600">{collection.name}</h1>
					): collection.name}
				</div>
				<div className="flex text-sm font-medium items-stretch">
					<div className="w-1/6 self-end grid gap-y-2">
						<div>
							<p className="">Lasted Updated</p>
							<p className="text-gray-400">{readableDateFormat(collection.updated_date)}</p>
						</div>

						<div>
							<p className="">Created Date</p>
							<p className="text-gray-400">{readableDateFormat(collection.created_date)}</p>
						</div>
					</div>

					<div className="w-2/6 grid gap-y-2">
						<div>
							<p className="">Visibility</p>
							<p className="text-gray-400">Public</p>
						</div>
					</div>

					<div className="w-1/6 self-center">
						<p className="flex items-center">
							<FileSpreadsheet className="text-blue-400 mr-2" />
							Problems ({collection.problems.length})
						</p>
					</div>

					<div className="grid gap-y-1">
						<div className="flex items-center">
							<Checkmark status />
							Source Code (10/10)
						</div>
						<div className="flex items-center">
							<Checkmark status />
							Testcases (10/10)
						</div>
						<div className="flex items-center">
							<Checkmark status />
							No Runtime Error (10/10)
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default MyCollectionCard;
