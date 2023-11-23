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
import PlateEditor from "../../../components/plate-editor";
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

const GeneralDetail = () => {
	const form = useForm();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form.getValues());
	};

	return (
		<Form {...form}>
			<form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Title</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Detail</FormLabel>
							<FormControl>
								<div className="rounded-lg border bg-background shadow">
									<PlateEditor />
								</div>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
};

const Scoring = () => {
	const [loading, setLoading] = useState(false);
	const [displayResult, setDisplayResult] = useState(false);

	const [delimeter, setDelimeter] = useState(":::");
	const [selectedLanguage, setSelectedLanguage] = useState("python");

	const handleValidation = () => {
		// setLoading(true);
		setDisplayResult(true);
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
						/>
					</div>
				</div>
				<MonacoEditor
					theme="vs-dark"
					height="35vh"
					defaultLanguage="python"
					// Change language base on selected language
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

			{displayResult && (
				<div className="wrap w-full">
					<div className="pr-5  h-[75vh] overflow-y-scroll">
						<TestcaseValidationAccordian />
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

const Requirement = () => {
	return (
		<div>
			<Label>Time Limit Exceeded (seconds)</Label>
			<Input type="number" />
		</div>
	);
};

const Privacy = () => {
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
	const [currentForm, setCurrentForm] = React.useState("general");

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
					<h1 className="text-3xl font-bold tracking-tight">
						Create Problem
					</h1>
					<div>
						<div className="flex">
							<Tabs defaultValue="general">
								<TabsList>
									{TabList.map((tab) => (
										<TabsTrigger
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
					{currentForm === "general" && <GeneralDetail />}
					{currentForm === "scoring" && <Scoring />}
					{currentForm === "requirement" && <Requirement />}
					{currentForm === "privacy" && <Privacy />}
				</div>
			</div>
		</NavbarSidebarLayout>
	);
};

export default CreateProblem;
