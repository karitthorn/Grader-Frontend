import { useNavigate } from "react-router-dom";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "../components/Form";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useForm } from "react-hook-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/Card";
import { Checkbox } from "../components/Checkbox";
import CenterContainer from "../layout/CenterLayout";

const Register = () => {
	// const nevigate = useNavigate();
	const form = useForm();

	const validatedForm = (): Boolean => {
		return true
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validatedForm()) {
			console.log(form.getValues());
		}
	};

	return (
		<CenterContainer className="w-[700px]">
			<Card>
				<CardHeader>
					<CardTitle>Registration</CardTitle>
					<CardDescription>Create new account</CardDescription>
				</CardHeader>
				<CardContent>
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
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="email"
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input type="email" {...field} />
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
										<FormLabel>Password</FormLabel>
										<FormControl>
											<Input type="password" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="confirmation_password"
								render={({ field }) => (
									<FormItem>
										<FormLabel>
											Confirmation Password
										</FormLabel>
										<FormControl>
											<Input type="password" {...field} />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name="agreed_to_tac"
								render={({ field }) => (
									<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md pt-2">
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<FormLabel>
											I have read and agreed with{" "}
											<a className="underline" href="#">
												Terms & Conditions
											</a>
										</FormLabel>
									</FormItem>
								)}
							/>

							<Button className="w-full" type="submit">
								Register
							</Button>
						</form>
					</Form>

					<CardDescription className="mt-2">Already have an account? Login <a className="underline text-blue-700" href="/login">here</a></CardDescription>

				</CardContent>
			</Card>
		</CenterContainer>
	);
};

export default Register;
