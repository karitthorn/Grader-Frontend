import React from "react";
import { Card } from "./shadcn/Card";
import { LibraryBig, StepForward } from "lucide-react";
import { Button } from "./shadcn/Button";
import { TopicModel } from "../types/models/Topic.model";
import { useNavigate } from "react-router-dom";

const PublicCourseCard = ({ course }: { course: TopicModel }) => {
    
	const navigate = useNavigate();

	return (
		<Card className="p-6">
			<div className="flex items-center font-bold text-2xl">
				<LibraryBig className="mr-2 text-purple-400" />
				<p>{course?.name}</p>
			</div>

			<div className="mt-3 flex justify-end">
				<Button onClick={() => navigate(`/courses/${course.topic_id}`)}>
					<StepForward className="mr-2" />
					Continue
				</Button>
			</div>
		</Card>
	);
};

export default PublicCourseCard;
