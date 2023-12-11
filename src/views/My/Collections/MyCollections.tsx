import React, { useContext, useEffect, useState } from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { Button } from "../../../components/shadcn/Button";
import { Input } from "../../../components/shadcn/Input";
import MyCollectionCard from "../../../components/MyCollectionCard";
import { useNavigate } from "react-router-dom";
import CardContainer from "../../../components/CardContainer";
import { NavSidebarContext } from "../../../contexts/NavSidebarContext";

const MyCollections = () => {
	const navigate = useNavigate();
	const [collections, setCollections] = useState([]);
	const {section,setSection} = useContext(NavSidebarContext)

	useEffect(() => {
		setSection("COLLECTIONS")
	}, []);

	return (
		<NavbarSidebarLayout>
			<div className="w-[96%] mx-auto mt-10">
				<div className="flex justify-between gap">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">
							My Collections
						</h1>
					</div>
					<div className="w-9/12 md:w-7/12">
						<Input placeholder="Search ..." />
					</div>
					<div>
						<Button
							onClick={() => navigate("/my/collections/create")}
						>
							Create Collection
						</Button>
					</div>
				</div>

				<CardContainer>
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
					<MyCollectionCard />
				</CardContainer>
			</div>
		</NavbarSidebarLayout>
	);
};

export default MyCollections;
