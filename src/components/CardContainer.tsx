import React from "react";

const CardContainer = ({children}: {
    children: React.ReactNode
}) => {
	return (
		<div className="mt-6 h-[80vh] md:h-[75vh] pr-5 overflow-y-scroll ">
			<div className="grid gap-y-3">
                {children}
            </div>
		</div>
	);
};

export default CardContainer;
