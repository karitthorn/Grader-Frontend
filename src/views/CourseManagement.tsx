import React from "react";
import NavbarMenuLayout from "../layout/NavbarMenuLayout";
import { Card, CardContent, CardDescription } from "../components/shadcn/Card";
import CollectionCard from "../components/CoursePlaylist/CollectionCard";
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from "../components/shadcn/Accordion";

const CourseManagement = () => {
	return (
		<NavbarMenuLayout yPad={false} xPad={false}>
			<div className="flex">
				<div className="w-1/6 border-2 h-screen pt-10">
					{/* <h1>Course Management</h1> */}

					<Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								Introduction course
							</AccordionTrigger>
							<AccordionContent>
								<div className="grid gap-y-1">
									<CollectionCard />
									<CollectionCard />
									<CollectionCard />
									<CollectionCard />
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>

                    <Accordion type="single" collapsible className="w-full">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								Introduction course 2
							</AccordionTrigger>
							<AccordionContent>
								<div className="grid gap-y-1">
									<CollectionCard />
									<CollectionCard />
									<CollectionCard />
									<CollectionCard />
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
				<div className="pt-10">
					<h1>Course Management</h1>
				</div>
			</div>
		</NavbarMenuLayout>
	);
};

export default CourseManagement;
