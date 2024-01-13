import React, { useEffect, useState } from "react";
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
import { CreateGroupRequestForm } from "../../../types/forms/CreateGroupRequestForm";
import MyCollectionMiniCard from "../../Cards/CollectionCards/MyCollectionMiniCard";
import { CollectionService } from "../../../services/Collection.service";
import { transformCollectionPopulateProblemSecureModel2CollectionHashedTable } from "../../../types/adapters/Collection.adapter";
import {
	CollectionHashedTable,
	CollectionPopulateProblemSecureModel,
} from "../../../types/models/Collection.model";
import AccountCheckboxCard from "../../Cards/AccountCards/AccountCheckboxCard";
import { AccountHashedTable, AccountSecureModel } from "../../../types/models/Account.model";
import { GroupHashedTable } from "../../../types/models/Group.model";
import { GroupService } from "../../../services/Group.service";
import { AccountService } from "../../../services/Account.service";
import { transformAccountModels2AccountHashedTable } from "../../../types/adapters/Account.adapter";
import AccountMiniCard from "../../Cards/AccountCards/AccountMiniCard";
import AccountMiniCard2 from "../../Cards/AccountCards/AccountMiniCard2";

const ManageMembers = ({
	createRequest,
	setCreateRequest,
}: {
	createRequest: CreateGroupRequestForm;
	setCreateRequest: React.Dispatch<
		React.SetStateAction<CreateGroupRequestForm>
	>;
}) => {
	const accountId = String(localStorage.getItem("account_id"));

	const [allAccountsSortable, setAllAccountsSortable] = useState<
		ItemInterface[]
	>([]);
	const [selectedAccountsSortable, setSelectedAccountsSortable] = useState<
		ItemInterface[]
	>([]);
	const [allAccounts, setAllAccounts] = useState<AccountHashedTable>({});

	const [initial, setInitial] = useState(true);
	const [selectedAccountsSortableIds, setSelectedAccountsSortableIds] =
		useState<string[]>([]);

	useEffect(() => {
		setSelectedAccountsSortableIds(
			selectedAccountsSortable?.map((item) => item.id as string)
		);
	}, [selectedAccountsSortable]);

	const handleRemoveSelectedCollection = (id: string) => {
		setSelectedAccountsSortable([
			...selectedAccountsSortable.filter((item) => item.id !== id),
		]);
	};

	const handleQuickToggleSelectedCollection = (item: ItemInterface) => {
		if (selectedAccountsSortableIds.includes(item.id as string)) {
			handleRemoveSelectedCollection(item.id as string);
		} else {
			setSelectedAccountsSortable([...selectedAccountsSortable, item]);
		}
	};

	useEffect(() => {
		setCreateRequest({
			...createRequest,
			membersInterface: selectedAccountsSortable,
		});
	}, [selectedAccountsSortable]);

	useEffect(() => {
		AccountService.getAll().then((response) => {
			setAllAccounts(transformAccountModels2AccountHashedTable(response.data.accounts))

			setAllAccountsSortable(
				response.data.accounts.map((account) => ({
					id: account.account_id,
					name: account.username,
				}))
			)
		})
	}, [accountId]);

	useEffect(() => {
		if (initial) {
			setSelectedAccountsSortable(createRequest.membersInterface);
			setInitial(false);
		}

		console.log("Create Request", createRequest);
	}, [createRequest]);

	return (
		<div>
			<div className="flex justify-between">
				<h1 className="text-2xl font-bold">Manage Collections</h1>

				<Button>Add Collections</Button>
			</div>

			<div className="flex">
				<div className="w-1/2">
					<div className="mt-6 pr-5">
						<div className="grid gap-y-3">
							<ScrollArea className="mt-6 h-[80vh] md:h-[60vh] pr-5">
								<ReactSortable
									animation={150}
									group="shared"
									list={selectedAccountsSortable}
									setList={setSelectedAccountsSortable}
									className="grid gap-y-2 p-2 rounded-md"
									sort={false}
								>
									{selectedAccountsSortable?.map((item) => (
										<AccountMiniCard2
											disabledHighlight
											onClick={() => handleRemoveSelectedCollection(item.id as string)}
											key={item.id}
											account={allAccounts[item.id as string] as AccountSecureModel}
										/>
									))}
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
							list={allAccountsSortable}
							setList={setAllAccountsSortable}
							filter=".selected"
							className="grid grid-cols-3 gap-2 p-2 rounded-md"
						>
							{allAccountsSortable?.map((item) => (
								<div
									className={
										selectedAccountsSortable?.includes(item)
											? "selected"
											: ""
									}
								>
									<AccountMiniCard2
											disabled={selectedAccountsSortableIds.includes(item.id as string)}
											onClick={() => handleQuickToggleSelectedCollection(item)}
											key={item.id}
											account={allAccounts[item.id as string] as AccountSecureModel}
										/>
								</div>
							))}
						</ReactSortable>
					</ScrollArea>
				</div>
			</div>
		</div>
	);
};

export default ManageMembers;
