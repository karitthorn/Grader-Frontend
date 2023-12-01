import React, { useEffect, useState } from "react";
import NavbarMenuLayout from "../../../layout/NavbarMenuLayout";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "../../../components/shadcn/Form";
import { useForm } from "react-hook-form";
import { Input } from "../../../components/shadcn/Input";
import { Checkbox } from "../../../components/shadcn/Checkbox";
import { Button } from "../../../components/shadcn/Button";
import PlateEditor from "../../../components/PlateEditor";
import { Tabs, TabsList, TabsTrigger } from "../../../components/shadcn/Tabs";
import NavbarSidebarLayout from "../../../layout/NavbarSidebarLayout";
import { Label } from "../../../components/shadcn/Label";
import { Separator } from "../../../components/shadcn/Seperator";
import { Editor as MonacoEditor } from "@monaco-editor/react";
import TestcaseValidationAccordian from "../../../components/TestcaseValidationAccordian";
import { Combobox } from "../../../components/shadcn/Combobox";
import { ProgrammingLanguageOptions } from "../../../constants/ProgrammingLanguage";
import {
	RadioGroup,
	RadioGroupItem,
} from "../../../components/shadcn/RadioGroup";
import { Switch } from "../../../components/shadcn/Switch";
import { ChevronLeftIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PlateEditorValueType } from "../../../types/models/PlateEditorValueType";
import DetailPlateEditor from "../../../components/DetailPlateEditor";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import { ProblemService } from "../../../services/Problem.service";
import { ValidateProgramResponse } from "../../../types/apis/Problem.api";

type CreateRequestForm = {
	title: string,
	description: PlateEditorValueType,
	solution: string,
	testcases: string,
	time_limit: number
}

const GeneralDetail = ({createRequest,setCreateRequest}:{
	createRequest:CreateRequestForm,
	setCreateRequest:React.Dispatch<React.SetStateAction<CreateRequestForm>>
}) => {

	const [editorUpdateCooldown, setEditorUpdateCooldown] = useState(false);

	const handleEditorChange = (value:PlateEditorValueType) => {
		if (!editorUpdateCooldown) {

			setCreateRequest({...createRequest,description: value})

			setEditorUpdateCooldown(true)
			setTimeout(()=>{
				setEditorUpdateCooldown(false)
			},1000)
		}
	}

	return (
		<div>

			<Label>Title</Label>
			<Input value={createRequest.title} onChange={(e) => setCreateRequest({...createRequest,title: e.target.value})} type="text"/>

			<Label>Detail</Label>
			<div className="rounded-lg border bg-background shadow">
				<DetailPlateEditor value={createRequest.description} onChange={e => handleEditorChange(e)}/>
			</div>
		</div>
		
	);
};

const Scoring = ({createRequest,setCreateRequest}:{
	createRequest:CreateRequestForm,
	setCreateRequest:React.Dispatch<React.SetStateAction<CreateRequestForm>>
}) => {
	const [loading, setLoading] = useState(false);
	const [displayResult, setDisplayResult] = useState(false);

	const [delimeter, setDelimeter] = useState(":::");
	const [selectedLanguage, setSelectedLanguage] = useState("python");

	const [validationResult, setValidationResult] = useState<ValidateProgramResponse>();

	const testcaseFormat = (testcases: string) => {
		// console.log({'a': testcases});
		// // Replace all \r\n to \n
		// let testcasesArray = testcases.replace(/\r\n/g, "\n");
		// console.log({'a': testcasesArray});
		// let testcasesArray1 = testcasesArray.split(delimeter + "\r\n")
		// console.log({'a': testcasesArray1});
		return testcases.replace(/\r\n/g, "\n").split(delimeter + "\n")
	}

	const handleValidation = () => {
		// setLoading(true);

		// console.log({
		// 	og: createRequest.testcases,
		// 	testcaseFormat: testcaseFormat(createRequest.testcases)
		// });
		ProblemService.validateProgram({
			source_code: createRequest.solution.replace(/\r\n/g, "\n"),
			testcases: testcaseFormat(createRequest.testcases),
			time_limited: createRequest.time_limit,
			language: selectedLanguage,
		}).then(response => {
			console.log(response.data);
			setValidationResult(response.data);
			setDisplayResult(true);
		})
	};

	useEffect(() => {
		console.log(selectedLanguage);
	}, [selectedLanguage]);

	return (
		<div className="flex">
			<div className="w-1/2">
				<div className="flex justify-between mb-1">
					<div>
						<Label>Source Code</Label>
					</div>
					<div>
						<Combobox
							label="Select Language"
							options={ProgrammingLanguageOptions}
							onSelect={(value) => setSelectedLanguage(value)}
							initialValue={selectedLanguage}
						/>
					</div>
				</div>
				<MonacoEditor
					theme="vs-dark"
					height="35vh"
					defaultLanguage="python"
					value={createRequest.solution}
					onChange={(e) => setCreateRequest({...createRequest,solution: String(e)})}
					language={selectedLanguage}
				/>

				<div className="my-1 flex justify-between items-center">
					<Label className="">Testcases</Label>
					<div className="flex w-1/2 items-center">
						<Label className="mr-3">
							Delimeter (For seperate each testcase)
						</Label>
						<Input
							className="w-1/2"
							value={delimeter}
							onChange={(e) => setDelimeter(e.target.value)}
						/>
					</div>
				</div>
				<MonacoEditor
					value={createRequest.testcases}
					onChange={(e) => setCreateRequest({...createRequest,testcases: String(e)})}
					theme="vs-dark"
					height="35vh"
					defaultLanguage="python"
				/>
			</div>
			<div>
				<Separator className="mx-2" orientation="vertical" />
			</div>

			{!displayResult && (
				<div className="m-auto">
					{!loading ? (
						<Button onClick={handleValidation} className="px-10">
							Validate
						</Button>
					) : (
						<h1>Validation ...</h1>
					)}
				</div>
			)}

			{(displayResult && validationResult) && (
				<div className="wrap w-full">
					<div className="pr-5  h-[75vh] overflow-y-scroll">
						<TestcaseValidationAccordian runtimeResults={validationResult?.runtime_results}/>
					</div>
					<div className="flex justify-end mt-5">
						<Button onClick={handleValidation} className="px-10">
							Validate Again
						</Button>
					</div>
				</div>
			)}
		</div>
	);
};

const Requirement = ({createRequest,setCreateRequest}:{
	createRequest:CreateRequestForm,
	setCreateRequest:React.Dispatch<React.SetStateAction<CreateRequestForm>>
}) => {
	return (
		<div>
			<Label>Time Limit Exceeded (seconds)</Label>
			<Input type="number" value={createRequest.time_limit} onChange={(e) => setCreateRequest({...createRequest,time_limit: Number(e.target.value)})} />
		</div>
	);
};

const Privacy = ({createRequest,setCreateRequest}:{
	createRequest:CreateRequestForm,
	setCreateRequest:React.Dispatch<React.SetStateAction<CreateRequestForm>>
}) => {

	createRequest
	setCreateRequest
	
	return (
		<div>
			<div className="flex items-center space-x-2">
				<Label htmlFor="airplane-mode">Visibility</Label>
				<Switch id="airplane-mode" />
			</div>

			<div className="flex items-center space-x-2">
				<Label htmlFor="airplane-mode">Allow Reference</Label>
				<Switch id="airplane-mode" />
			</div>
		</div>
	);
};

const CreateProblem = () => {
	const navigate = useNavigate();

	const [currentForm, setCurrentForm] = React.useState("general");
	const [createRequest,setCreateRequest] = useState<CreateRequestForm>({
		title: "",
		description: [
			{
			  id: '1',
			  type: ELEMENT_PARAGRAPH,
			  children: [{ text: '' }],
			},
		],
		solution: "",
		testcases: "",
		time_limit: 1.5
	})

	const handleFormSwitching = (e: any) => {
		console.log(e);
	};

	const TabList = [
		{
			value: "general",
			label: "General Detail",
		},
		{
			value: "scoring",
			label: "Scoring",
		},
		{
			value: "requirement",
			label: "Requirement",
		},
		{
			value: "privacy",
			label: "Privacy",
		},
	];

	return (
		<NavbarSidebarLayout>
			<div className="w-[96%] mx-auto mt-10">
				<div className="flex justify-between">
					<h1 className="text-3xl font-bold tracking-tight flex">
						<ChevronLeftIcon
							size={40}
							className="text-gray-300 cursor-pointer"
							onClick={() => navigate("/my/problems")}
						/>
						Create Problem
					</h1>
					<div>
						<div className="flex">
							<Tabs defaultValue="general">
								<TabsList>
									{TabList.map((tab,index) => (
										<TabsTrigger
											key={index}
											value={tab.value}
											onClick={() =>
												setCurrentForm(tab.value)
											}
										>
											{tab.label}
										</TabsTrigger>
									))}
								</TabsList>
							</Tabs>
							<Button className="px-10 ml-5">Save</Button>
						</div>
					</div>
				</div>

				<div className="mt-3">
					{currentForm === "general" && <GeneralDetail 
						createRequest={createRequest} setCreateRequest={setCreateRequest}
					/>}
					{currentForm === "scoring" && <Scoring 
						createRequest={createRequest} setCreateRequest={setCreateRequest}
					/>}
					{currentForm === "requirement" && <Requirement 
						createRequest={createRequest} setCreateRequest={setCreateRequest}
					/>}
					{currentForm === "privacy" && <Privacy 
						createRequest={createRequest} setCreateRequest={setCreateRequest}
					/>}
				</div>
			</div>
		</NavbarSidebarLayout>
	);
};

export default CreateProblem;
