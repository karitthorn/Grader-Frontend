import React from "react";

const CardContainer = ({children,className=""}: {
    children: React.ReactNode
	className?: string
}) => {
	return (
		<div className={"mt-6 h-[80vh] md:h-[75vh] pr-5 overflow-y-scroll " + className}>
			<div className="grid gap-y-3">
                {children}
            </div>
		</div>
	);
};

export default CardContainer;
