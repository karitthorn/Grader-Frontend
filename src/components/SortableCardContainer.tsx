import React from "react";
import { ReactSortable } from "react-sortablejs";
import { ScrollArea } from "./shadcn/ScrollArea";

const SortableCardContainer = ({
	children,
    ...args
}: {
	children: React.ReactNode;
}) => {
	return (
		<ScrollArea className="mt-6 h-[80vh] md:h-[65vh] pr-5">

			<ReactSortable className="grid gap-y-3 p-2 rounded-md" {...args}>{children}</ReactSortable>
		</ScrollArea>
		// </div>
	);
};

export default SortableCardContainer;
