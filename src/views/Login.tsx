import React from "react";

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
import CenterContainer from "../layout/CenterContainer";

// import { getAuthorization, login } from "../services/auth.service";

const Login = () => {
	const form = useForm();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(form.getValues());
	};

	return (
		<CenterContainer>
			<Card>
					<CardHeader>
						<CardTitle>Login</CardTitle>
						<CardDescription>Login to your account</CardDescription>
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
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Password</FormLabel>
											<FormControl>
												<Input
													type="password"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								<FormField
									control={form.control}
									name="remember"
									render={({ field }) => (
										<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md pt-2">
											<FormControl>
												<Checkbox
													checked={field.value}
													onCheckedChange={
														field.onChange
													}
												/>
												
											</FormControl>
											<FormLabel>
												Remember Me
											</FormLabel>
											
										</FormItem>
									)}
								/>

								

								<Button className="w-full" type="submit">
									Login
								</Button>
							</form>
						</Form>
					</CardContent>
				</Card>
		</CenterContainer>
	);
};

export default Login;
