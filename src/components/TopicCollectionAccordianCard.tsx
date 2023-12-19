import React from "react";
import { Card } from "./shadcn/Card";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./shadcn/Accordion";
import { FileSpreadsheet, Folder } from "lucide-react";
import PublicProblemCard from "./PublicProblemCard";
import { CollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Collection.model";
import CardContainer from "./CardContainer";
import { ScrollArea } from "./shadcn/ScrollArea";

const TopicCollectionAccordianCard = ({
	collection,
}: {
	collection: CollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel;
}) => {
	return (
		<Card className="px-5 cursor-pointer">
			<Accordion type="multiple" className="">
				<AccordionItem value="1" className="border-none">
					<AccordionTrigger className="flex items-center">
						<div className="flex items-center font-bold w-1/2">
							<Folder className="text-yellow-400 mr-2" />
							{collection.name}
						</div>

						<div className="flex items-center font-bold">
							<FileSpreadsheet className="text-blue-400 mr-2" />
							({collection.problems.filter(collectionProblem => collectionProblem.problem.best_submission?.is_passed).length}/{collection.problems.length})
						</div>
					</AccordionTrigger>
					<AccordionContent>
						<ScrollArea className="mt-6 pr-5">
							<div className="grid gap-y-3">

							{collection.problems.map((problem) => (
								<PublicProblemCard problem={problem.problem} />
								))}
								</div>
						</ScrollArea>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</Card>
	);
};

export default TopicCollectionAccordianCard;
