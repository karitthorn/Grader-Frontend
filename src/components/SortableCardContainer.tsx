import React from "react";
import { ReactSortable } from "react-sortablejs";

const SortableCardContainer = ({
	children,
    ...args
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="mt-6 h-[80vh] md:h-[65vh] pr-5 overflow-y-scroll ">
			<ReactSortable className="grid gap-y-3" {...args}>{children}</ReactSortable>
		</div>
	);
};

export default SortableCardContainer;
