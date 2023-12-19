import React, { useContext, useEffect, useState } from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { Button } from "../../../components/shadcn/Button";
import { Input } from "../../../components/shadcn/Input";
import MyCollectionCard from "../../../components/MyCollectionCard";
import { useNavigate } from "react-router-dom";
import CardContainer from "../../../components/CardContainer";
import { NavSidebarContext } from "../../../contexts/NavSidebarContext";
import { CollectionService } from "../../../services/Collection.service";
import { CollectionModel, CollectionProblemModel } from "../../../types/models/Collection.model";
import { FolderPlus } from "lucide-react";

const MyCollections = () => {
	const navigate = useNavigate();
	const accountId = Number(localStorage.getItem("account_id"));

	const [collections, setCollections] = useState<CollectionProblemModel[]>([]);
	const {setSection} = useContext(NavSidebarContext)

	useEffect(() => {
		setSection("COLLECTIONS")
		CollectionService.getAllByAccount(accountId).then((response => {
			setCollections(response.data.collections)
		}))
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
							<FolderPlus size={20} className="mr-2" />
							Create Collection
						</Button>
					</div>
				</div>

				<CardContainer>
					{collections.map(collection => (
						<MyCollectionCard collection={collection}/>
					))}
				</CardContainer>
			</div>
		</NavbarSidebarLayout>
	);
};

export default MyCollections;
