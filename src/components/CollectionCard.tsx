import React, { useState } from "react";
import { Card, CardContent, CardTitle } from "./shadcn/Card";
import { Button } from "./shadcn/Button";

const CollectionCard = () => {

    const [toolVisible, setToolVisible] = useState(false);

	return (
		<Card
			onMouseOver={() => setToolVisible(true)}
			onMouseOut={() => setToolVisible(false)}
			className="pt-4 px-5 h-[200px]"
		>
			<div className="flex justify-between">
				<div>
					<CardTitle>Collection Name</CardTitle>
				</div>
				<div
					className={"flex gap-2 " + (toolVisible ? "" : "invisible")}
				>
					<Button>View</Button>
					<Button>Edit</Button>
					<Button>Delete</Button>
				</div>
			</div>
			<CardContent>
				<div className="flex">
					<div className="text-md w-1/2 h-[120px] text-ellipsis overflow-hidden">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Et laudantium nobis dicta cum modi molestias quas
						aliquid earum repudiandae a optio adipisci laboriosam
						fugiat harum eaque assumenda sint similique, debitis
						maxime? Dignissimos nam iste unde, dicta, quia non
						itaque vero earum voluptatem, molestias quaerat dawdsad
						asdwasdwa Lorem ipsum dolor, sit amet consectetur
						adipisicing elit. Et laudantium nobis dicta cum modi
						molestias quas aliquid earum repudiandae a optio
						adipisci laboriosam fugiat harum eaque assumenda sint
						similique, debitis maxime? Dignissimos nam iste unde,
						dicta, quia non itaque vero earum voluptatem, molestias
						quaerat dawdsad sdwasdwasdw asdwasdwa
					</div>

					<div className="grid ml-10">
						<p>Source Code</p>
						<p>Testcases</p>
						<p>No Runtime Error</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};

export default CollectionCard;
