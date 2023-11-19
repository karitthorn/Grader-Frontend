import React from "react";
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

const CreateProblem = () => {
	const form = useForm();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form.getValues());
	};

	return (
		<NavbarMenuLayout xPad={false}>
			<div className="w-[96%] mx-auto">
				<Form {...form}>
					<form
						onSubmit={(e) => handleSubmit(e)}
						className="space-y-4"
					>
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
										<div className="h-[60vh] rounded-lg border bg-background shadow">
											<PlateEditor/>
										</div>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<div className="grid justify-items-end">
							<Button className="w-1/6" type="submit">
								Next
							</Button>
						</div>
					</form>
				</Form>
			</div>
		</NavbarMenuLayout>
	);
};

export default CreateProblem;
