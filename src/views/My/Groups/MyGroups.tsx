import React, { useContext, useEffect, useState } from "react";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { Input } from "../../../components/shadcn/Input";
import { Button } from "../../../components/shadcn/Button";
import { useNavigate } from "react-router-dom";
import CardContainer from "../../../components/CardContainer";
import MyCourseCard from "../../../components/Cards/CourseCards/MyCourseCard";
import { NavSidebarContext } from "../../../contexts/NavSidebarContext";
import { TopicService } from "../../../services/Topic.service";
import { TopicPopulateTopicCollectionPopulateCollectionModel } from "../../../types/models/Topic.model";
import { LibraryBig } from "lucide-react";
import MyGroupCard from "../../../components/Cards/MyGroupCard";
import { GroupPopulateGroupMemberPopulateAccountSecureModel } from "../../../types/models/Group.model";
import { GroupService } from "../../../services/Group.service";

const MyGroups = () => {

    const navigate = useNavigate();
	const accountId = String(localStorage.getItem("account_id"));
    const {setSection} = useContext(NavSidebarContext)

	const [groups, setGroups] = useState<GroupPopulateGroupMemberPopulateAccountSecureModel[]>([])
	const [filteredGroups, setFilteredGroups] = useState<GroupPopulateGroupMemberPopulateAccountSecureModel[]>([])
	const [searchValue, setSearchValue] = useState("")

	useEffect(() => {
		if (!searchValue || searchValue === "") {
			setFilteredGroups(groups)
		}
		else {
			setFilteredGroups(groups.filter((group) => group.name.toLowerCase().includes(searchValue.toLowerCase())))
		}
	},[searchValue,groups])

    useEffect(( )=> {
        setSection("GROUPS")
		GroupService.getAllAsCreator(accountId,{
			populate_members: true,
		}).then((response) => {
			setGroups(response.data.groups as GroupPopulateGroupMemberPopulateAccountSecureModel[]);
		})
    },[])

	return (
		<NavbarSidebarLayout>
			<div className="w-[96%] mx-auto mt-10">
				<div className="flex justify-between gap">
					<div>
						<h1 className="text-3xl font-bold tracking-tight">
							My Groups
						</h1>
					</div>
					<div className="xl:w-9/12 w-7/12">
						<Input placeholder="Search ..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
					</div>
					<div>
						<Button
							onClick={() => navigate("/my/groups/create")}
						>
							<LibraryBig size={20} className="mr-2" />
							Create Groups
						</Button>
					</div>
				</div>

				<CardContainer>
					{
						filteredGroups.map((group) => (
							<MyGroupCard group={group}/>
						))
					}
				</CardContainer>
			</div>
		</NavbarSidebarLayout>
	);
};

export default MyGroups;
