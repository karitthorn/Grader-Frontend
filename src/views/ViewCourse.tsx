import React, { useEffect, useState } from "react";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import { useParams } from "react-router-dom";
import { TopicService } from "../services/Topic.service";
import { TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Topic.model";
import ReadOnlyPlate from "../components/ReadOnlyPlate";
import { DummyEditorValue } from "../constants/DummyEditorValue";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/shadcn/Accordion";
import { LibraryBig } from "lucide-react";
import { Card } from "../components/shadcn/Card";
import TopicCollectionAccordianCard from "../components/TopicCollectionAccordianCard";
import CardContainer from "../components/CardContainer";
import { ScrollArea } from "../components/shadcn/ScrollArea";

const ViewCourse = () => {
	const accountId = Number(localStorage.getItem("account_id"));
	const { courseId } = useParams();

	const [course, setCourse] =
		useState<TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel>();

	useEffect(() => {
		TopicService.publicGetByAccount(accountId, Number(courseId)).then(
			(response) => {
				console.log(response.data);
				setCourse(response.data);
			}
		);
	}, [accountId, courseId]);

	return (
		<NavbarMenuLayout>
			<div className="mt-10 mx-auto w-[95%]">
				<h1 className="text-3xl font-bold flex items-center">
					<LibraryBig size={36} className="text-yellow-400 mr-2" />
					{course?.name}
				</h1>
				<ReadOnlyPlate value={DummyEditorValue} />

				{/* <CardContainer> */}
				<ScrollArea className="mt-6 pr-5 ">
					<div className="grid gap-y-3">
						{course?.collections.map((topicCollection) => (
							<TopicCollectionAccordianCard
								collection={topicCollection.collection}
							/>
						))}
					</div>
				</ScrollArea>

				{/* </CardContainer> */}
			</div>
		</NavbarMenuLayout>
	);
};

export default ViewCourse;
