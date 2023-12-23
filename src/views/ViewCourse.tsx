import React, { useContext, useEffect, useState } from "react";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import { useParams } from "react-router-dom";
import { TopicService } from "../services/Topic.service";
import {
	TopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel,
	TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel,
} from "../types/models/Topic.model";
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
import TopicCollectionAccordionCard from "../components/TopicCollectionAccordionCard";
import CardContainer from "../components/CardContainer";
import { ScrollArea } from "../components/shadcn/ScrollArea";
import TopicCollectionsAccordion from "../components/TopicCollectionsAccordion";
import { CollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../types/models/Collection.model";
import CourseNavbarSidebarLayout from "../layout/CourseNavbarSidebarLayout";
import { CourseNavSidebarContext } from "../contexts/CourseNavSidebarContexnt";

const ViewCourse = () => {
	const accountId = Number(localStorage.getItem("account_id"));
	const { courseId } = useParams();

	// const [course, setCourse] =
	// 	useState<TopicPopulateTopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel>();

	// const [course,setCourse]

	const {course,setCourse} = useContext(CourseNavSidebarContext);

	// useEffect(() => {
	// 	TopicService.getPublicByAccount(accountId, Number(courseId)).then(
	// 		(response) => {
	// 			console.log(response.data);
	// 			setCourse(response.data);
	// 		}
	// 	);
	// }, [accountId, courseId]);

	return (
		<CourseNavbarSidebarLayout>
			<div className="mt-10 mx-auto w-[95%]">
				<h1 className="text-3xl font-bold flex items-center">
					<LibraryBig size={36} className="text-purple-400 mr-2" />
					{course?.name}
				</h1>
				{course && (
					<ReadOnlyPlate
						value={JSON.parse(String(course.description))}
					/>
				)}
				{/* <CardContainer> */}
				{/* <ScrollArea className="mt-6 pr-5 "> */}
				{/* <TopicCollectionsAccordion
						collections={course?.collections as TopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[]}
					/> */}

				<div className="grid gap-y-2 ">
					{course?.collections.map((tc) => (
						<TopicCollectionAccordionCard
							collection={tc.collection}
						/>
					))}
				</div>
				{/* </ScrollArea> */}

				{/* </CardContainer> */}
			</div>
		</CourseNavbarSidebarLayout>
	);
};

export default ViewCourse;
