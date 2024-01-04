import React, { useContext, useEffect, useState } from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { Input } from "../../../components/shadcn/Input";
import { Button } from "../../../components/shadcn/Button";
import { useNavigate } from "react-router-dom";
import CardContainer from "../../../components/CardContainer";
import MyCourseCard from "../../../components/Cards/CourseCards/MyCourseCard";
import { NavSidebarContext } from "../../../contexts/NavSidebarContext";
import { TopicService } from "../../../services/Topic.service";
import { TopicPopulateTopicCollectionPopulateCollectionModel } from "../../../types/models/Topic.model";
import { LibraryBig } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "../../../components/shadcn/Tabs";

const MyCourses = () => {

    const navigate = useNavigate();
	const accountId = String(localStorage.getItem("account_id"));
    const {setSection} = useContext(NavSidebarContext)

	const [topics, setTopics] = useState<TopicPopulateTopicCollectionPopulateCollectionModel[]>([])
	const [manageableTopics, setManageableTopics] = useState<TopicPopulateTopicCollectionPopulateCollectionModel[]>([])

	const [tabValue, setTabValue] = useState("personal")

    useEffect(( )=> {
        setSection("COURSES")
		TopicService.getAllAsCreator(accountId).then((response) => {
			setTopics(response.data.topics)
			setManageableTopics(response.data.manageable_topics)
		})
    },[])

	return (
		<NavbarSidebarLayout>
			<div className="w-[96%] mx-auto mt-10">
				<div className="flex justify-between gap">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">
							My Courses
						</h1>
					</div>
					<div className="xl:w-7/12 w-5/12">
						<Input placeholder="Search ..." />
					</div>
					<div>
						<Tabs value={tabValue} onValueChange={(e) => setTabValue(e)}>
							<TabsList>
								<TabsTrigger value="personal">
									Personal
								</TabsTrigger>
								<TabsTrigger value="manageable">
									Manageable
								</TabsTrigger>
							</TabsList>
						</Tabs>
					</div>
					<div>
						<Button
							onClick={() => navigate("/my/courses/create")}
						>
							<LibraryBig size={20} className="mr-2" />
							Create Course
						</Button>
					</div>
				</div>

				<CardContainer>
					{
						tabValue === "personal" && topics.map(topic => (
							<MyCourseCard course={topic}/>
						))
					}
					{
						tabValue === "manageable" && manageableTopics.map(topic => (
							<MyCourseCard course={topic}/>
						))
					}
				</CardContainer>
			</div>
		</NavbarSidebarLayout>
	);
};

export default MyCourses;
