import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CourseNavSidebarContext } from "../../contexts/CourseNavSidebarContexnt";
import { TopicService } from "../../services/Topic.service";
import { Separator } from "../shadcn/Seperator";
import { Folder, LibraryBig } from "lucide-react";
import NavbarCollectionsProblemsAccordion from "../NavbarCollectionsProblemsAccordion";
import { TopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel } from "../../types/models/Topic.model";
import { ScrollArea } from "../shadcn/ScrollArea";

const CourseNavSidebar = () => {
	const navigate = useNavigate();
	const accountId = Number(localStorage.getItem("account_id"));
	const { courseId } = useParams();

	const { isOpen, setIsOpen, section, setSection, course, setCourse } =
		useContext(CourseNavSidebarContext);

	useEffect(() => {
		TopicService.publicGetByAccount(accountId, Number(courseId)).then(
			(response) => {
				console.log(response.data);
				setCourse(response.data);
			}
		);
	}, [accountId, courseId]);

	return (
		<>
			<div className="h-screen pt-10 sticky top-0">
				<div>
					<div
						onClick={() => navigate(`/courses/${courseId}`)}
						className="flex items-center px-2 py-4 cursor-pointer"
					>
						<LibraryBig
							size={20}
							className="text-purple-400 mx-1"
						/>
						<p className="font-medium text-base w-11/12 line-clamp-1 text-left">
							{course?.name}
						</p>
					</div>
					<Separator />
					<ScrollArea className="h-[80vh]">
						<NavbarCollectionsProblemsAccordion
							collections={
								course?.collections as TopicCollectionPopulateCollectionPopulateCollectionProblemPopulateProblemPopulateAccountAndSubmissionPopulateSubmissionTestcasesSecureModel[]
							}
						/>
					</ScrollArea>
				</div>
			</div>
		</>
	);
};

export default CourseNavSidebar;
