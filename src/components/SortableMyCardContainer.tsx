import React from "react";
import { ReactSortable } from "react-sortablejs";

const SortableMyCardContainer = ({
	children,
    ...args
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="mt-6 h-[80vh] md:h-[75vh] pr-5 overflow-y-scroll ">
			<ReactSortable className="grid gap-y-3" {...args}>{children}</ReactSortable>
		</div>
	);
};

export default SortableMyCardContainer;
