import React from "react";
import NavbarMenuLayout from "../../../../layout/NavbarMenuLayout";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "../../../../components/shadcn/Form";
import { useForm } from "react-hook-form";
import { Input } from "../../../../components/shadcn/Input";
import { Checkbox } from "../../../../components/shadcn/Checkbox";
import { Button } from "../../../../components/shadcn/Button";
import PlateEditor from "../../../../components/plate-editor";
import {
	Tabs,
	TabsList,
	TabsTrigger,
} from "../../../../components/shadcn/Tabs";
import Sidebar from "../../../../layout/Sidebar";

const GeneralDetail = () => {
	const form = useForm();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form.getValues());
	};

	return (
		<Form {...form}>
			<h1 className="text-3xl font-bold tracking-tight">General Detail</h1>
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

	const form = useForm();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form.getValues());
	};

	return (
		<Form {...form}>
			<h1 className="text-3xl font-bold tracking-tight">Scoring</h1>
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
}

const CreateProblem = () => {
	

	const [currentForm, setCurrentForm] = React.useState("general");

	const handleFormSwitching = (e: any) => {
		console.log(e);
	};

	return (
		<NavbarMenuLayout xPad={false}>
			<Sidebar>
				<div className="w-[96%] mx-auto mt-10">
					<div className="flex justify-between">
						<div>
							<Tabs defaultValue="general">
								<TabsList>
									<TabsTrigger value="general" onClick={() => setCurrentForm("general")}>
										General Detail
									</TabsTrigger>
									<TabsTrigger value="scoring" onClick={() => setCurrentForm("scoring")}>
										Scoring
									</TabsTrigger>
									<TabsTrigger value="misc">Misc</TabsTrigger>
								</TabsList>
							</Tabs>
						</div>

						<div>
							<Button className="" type="submit">
								Next
							</Button>
						</div>
					</div>

					<div className="mt-3">
					{currentForm === "general" && <GeneralDetail/>}
					{currentForm === "scoring" && <Scoring/>}
					</div>
				</div>
			</Sidebar>
		</NavbarMenuLayout>
	);
};

export default CreateProblem;
