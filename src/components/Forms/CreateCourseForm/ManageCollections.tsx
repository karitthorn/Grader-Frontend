import React, { useContext, useEffect, useState } from "react";
import { CreateCollectionRequestForm } from "../../../types/forms/CreateCollectionRequestForm";
import { ReactSortable } from "react-sortablejs";
import { Button } from "../../shadcn/Button";
import { Separator } from "../../shadcn/Seperator";
import { Input } from "../../shadcn/Input";
import { ProblemService } from "../../../services/Problem.service";
import {
	ProblemHashedTable,
	ProblemModel,
	ProblemSecureModel,
} from "../../../types/models/Problem.model";
import { ItemInterface } from "./../../../../node_modules/react-sortablejs/dist/index.d";
import MyProblemCard from "../../Cards/ProblemCards/MyProblemCard";
import CardContainer from "../../CardContainer";
import SortableCardContainer from "../../SortableCardContainer";
import MyProblemMiniCard from "../../Cards/ProblemCards/MyProblemMiniCard";
import { ScrollArea } from "../../shadcn/ScrollArea";
import { Item } from "@radix-ui/react-context-menu";
import { transformProblemModel2ProblemHashedTable } from "../../../types/adapters/Problem.adapter";
import { CreateCourseRequestForm } from "../../../types/forms/CreateCourseRequestForm";
import MyCollectionMiniCard from "../../Cards/CollectionCards/MyCollectionMiniCard";
import { CollectionService } from "../../../services/Collection.service";
import { transformCollectionPopulateProblemSecureModel2CollectionHashedTable } from "../../../types/adapters/Collection.adapter";
import {
	CollectionHashedTable,
	CollectionModel,
	CollectionPopulateCollectionProblemPopulateProblemModel,
	CollectionPopulateProblemSecureModel,
} from "../../../types/models/Collection.model";
import MyCollectionMiniCard2 from "../../Cards/CollectionCards/MyCollectionMiniCard2";
import { CourseNavSidebarContext } from "../../../contexts/CourseNavSidebarContexnt";
import { Tabs, TabsList, TabsTrigger } from "../../shadcn/Tabs";
import { Switch } from "../../shadcn/Switch";

const ManageCollections = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateCourseRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateCourseRequestForm>
	>;
}) => {
	const accountId = String(localStorage.getItem("account_id"));

	const [allCollectionsSortable, setAllCollectionsSortable] = useState<
		ItemInterface[]
	>([]);
	const [selectedCollectionsSortable, setSelectedCollectionsSortable] =
		useState<ItemInterface[]>([]);
	const [allCollections, setAllCollections] = useState<CollectionHashedTable>(
		{}
	);

	const [initial, setInitial] = useState(true);
	const [tabValue, setTabValue] = useState("add");
	const [selectedCollectionsSortableIds, setSelectedCollectionsSortableIds] =
		useState<string[]>([]);

	useEffect(() => {
		setSelectedCollectionsSortableIds(
			selectedCollectionsSortable.map((item) => item.id as string)
		);
	}, [selectedCollectionsSortable]);

	const handleRemoveSelectedCollection = (id: string) => {
		setSelectedCollectionsSortable([
			...selectedCollectionsSortable.filter((item) => item.id !== id),
		]);
	};

	const handleQuickToggleSelectedCollection = (item: ItemInterface) => {
		// if (selectedCollectionsSortable.find((item1) => item1.id === item.id)) {
		// 	console.log("Remove");
		// 	handleRemoveSelectedCollection(item.id as string);
		// } else {
		// 	console.log("Add");
		// 	setSelectedCollectionsSortable([...selectedCollectionsSortable, item]);
		// }

		if (selectedCollectionsSortableIds.includes(item.id as string)) {
			handleRemoveSelectedCollection(item.id as string);
		} else {
			setSelectedCollectionsSortable([
				...selectedCollectionsSortable,
				item,
			]);
		}
	};

	useEffect(() => {
		setCreateRequest({
			...createRequest,
			collectionsInterface: [...selectedCollectionsSortable],
		});
	}, [selectedCollectionsSortable]);

	useEffect(() => {
		CollectionService.getAllAsCreator(accountId).then((response) => {
			setAllCollections(
				transformCollectionPopulateProblemSecureModel2CollectionHashedTable(
					response.data.collections
				)
			);

			setAllCollectionsSortable(
				response.data.collections.map((collection) => ({
					id: collection.collection_id,
					name: collection.name,
				}))
			);
		});
	}, [accountId]);

	useEffect(() => {
		if (createRequest.course) {
			setAllCollections({
				...allCollections,
				...transformCollectionPopulateProblemSecureModel2CollectionHashedTable(
					createRequest.course.collections.map(
						(cc) =>
							cc.collection as CollectionPopulateCollectionProblemPopulateProblemModel
					)
				),
			});

			// console.log({
			// 	...allCollections,
			// 	...transformCollectionPopulateProblemSecureModel2CollectionHashedTable(
			// 		createRequest.course.collections.map(
			// 			(cc) => cc.collection
			// 		) as CollectionModel[]
			// 	),
			// })

			// console.log('ccc',
			// 	createRequest.course.collections.map((cc) => cc.collection)
			// );
		}
		// console.log(createRequest.course);
	}, [createRequest.course, allCollections]);

	useEffect(() => {
		if (initial) {
			setSelectedCollectionsSortable(createRequest.collectionsInterface);
			setInitial(false);
		}

		console.log("Create Request", createRequest);
	}, [createRequest]);

	return (
		<div>
			<div className="flex justify-end">
				<Tabs value={tabValue} onValueChange={(e) => setTabValue(e)}>
					<TabsList>
						<TabsTrigger value="add">Add / Remove</TabsTrigger>
						<TabsTrigger value="permission">
							Permissions
						</TabsTrigger>
					</TabsList>
				</Tabs>
			</div>

			{tabValue === "add" && (
				<div className="flex">
					<div className="w-1/2">
						<div className="mt-6 pr-5">
							<div className="grid gap-y-3">
								<ScrollArea className="mt-6 h-[80vh] md:h-[60vh] pr-5">
									<ReactSortable
										animation={150}
										group="shared"
										list={selectedCollectionsSortable}
										setList={setSelectedCollectionsSortable}
										className="grid gap-y-2 p-2 rounded-md"
									>
										{selectedCollectionsSortable?.map(
											(item) => (
												<MyCollectionMiniCard2
													disabledHighlight
													onClick={() =>
														handleRemoveSelectedCollection(
															item.id as string
														)
													}
													key={item.id}
													collection={
														allCollections[
															item.id as string
														] as CollectionPopulateCollectionProblemPopulateProblemModel
													}
												/>
											)
										)}
									</ReactSortable>
								</ScrollArea>
							</div>
						</div>
					</div>

					<div className="mx-3">
						<Separator orientation="vertical" />
					</div>

					<div className="w-1/2">
						<Input className="mt-2" />
						<ScrollArea className="mt-6 h-[80vh] md:h-[60vh] pr-5">
							<ReactSortable
								group={{
									name: "shared",
									pull: "clone",
									put: false,
								}}
								animation={150}
								sort={false}
								list={allCollectionsSortable}
								setList={setAllCollectionsSortable}
								filter=".selected"
								className="grid grid-cols-3 gap-2 p-2 rounded-md"
							>
								{allCollectionsSortable?.map((item) => (
									<div
										className={
											selectedCollectionsSortable.includes(
												item
											)
												? "selected"
												: ""
										}
									>
										<MyCollectionMiniCard2
											onClick={() =>
												handleQuickToggleSelectedCollection(
													item
												)
											}
											disabled={selectedCollectionsSortableIds.includes(
												item.id as string
											)}
											key={item.id}
											collection={
												allCollections[
													item.id as string
												] as CollectionPopulateCollectionProblemPopulateProblemModel
											}
										/>
									</div>
								))}
							</ReactSortable>
						</ScrollArea>
					</div>
				</div>
			)}
			{tabValue === "permission" && (
				<div className="">
					<div className="mt-6 pr-5">
						<div className="grid gap-y-3">
							<ScrollArea className="mt-6 h-[80vh] md:h-[60vh] pr-5">
								<div className="grid gap-y-2 p-2 rounded-md">
									{selectedCollectionsSortable?.map(
										(item) => (
											<div className="flex items-center justify-between">
												<div className="w-1/2">
													<MyCollectionMiniCard2
														disabledHighlight
														key={item.id}
														collection={
															allCollections[
																item.id as string
															] as CollectionPopulateCollectionProblemPopulateProblemModel
														}
													/>
												</div>

												<div className="flex items-center font-medium text-sm">
												View Collection
													<Switch className="ml-2"/>
												</div>
												<div className="flex items-center font-medium text-sm">
												Manage Collection
													<Switch className="ml-2"/>
												</div>
											</div>
										)
									)}
								</div>
							</ScrollArea>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ManageCollections;
