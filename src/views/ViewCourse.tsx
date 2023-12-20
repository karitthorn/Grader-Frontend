import React, { useEffect, useState } from "react";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import { useParams } from "react-router-dom";
import { TopicService } from "../services/Topic.service";
import { TopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel, TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Topic.model";
import ReadOnlyPlate from "../components/ReadOnlyPlate";
import {
	DummyEditorValue,
	EmptyEditorValue,
} from "../constants/DummyEditorValue";
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
import TopicCollectionsAccordian from "../components/TopicCollectionsAccordian";
import { CollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Collection.model";

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
				{course && (
					<ReadOnlyPlate
						value={JSON.parse(String(course.description))}
					/>
				)}
				{/* <CardContainer> */}
				{/* <ScrollArea className="mt-6 pr-5 "> */}
					<TopicCollectionsAccordian
						collections={course?.collections as TopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[]}
					/>
				{/* </ScrollArea> */}

				{/* </CardContainer> */}
			</div>
		</NavbarMenuLayout>
	);
};

export default ViewCourse;
