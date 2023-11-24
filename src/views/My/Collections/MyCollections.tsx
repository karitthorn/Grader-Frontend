import React from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { Button } from "../../../components/shadcn/Button";
import { Input } from "../../../components/shadcn/Input";
import CollectionCard from "../../../components/CollectionCard";

const MyCollections = () => {
	return (
		<NavbarSidebarLayout>
			<div className="w-[96%] mx-auto mt-10">
				<div className="flex justify-between gap">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">
							My Collections
						</h1>
					</div>
					<div className="w-9/12">
						<Input placeholder="Search ..." />
					</div>
					<div>
						<Button>
							Create Collection
						</Button>
					</div>
				</div>

				<div className="grid gap-y-3 mt-6 h-[80vh] pr-5 overflow-y-scroll">
					<CollectionCard/>
					<CollectionCard/>
					<CollectionCard/>
					<CollectionCard/>
					<CollectionCard/>
				</div>
			</div>
		</NavbarSidebarLayout>
	);
};

export default MyCollections;
