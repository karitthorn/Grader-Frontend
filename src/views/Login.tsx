import React from "react";

import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "../components/shadcn/Form";
import { Button } from "../components/shadcn/Button";
import { Input } from "../components/shadcn/Input";
import { useForm } from "react-hook-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../components/shadcn/Card";
import { Checkbox } from "../components/shadcn/Checkbox";
import CenterContainer from "../layout/CenterLayout";
import { AuthService } from "../services/Auth.service";
import { AccountModel } from "../types/models/Account";
import { useNavigate } from "react-router-dom";
// import { getAuthorization, login } from "../services/auth.service";

const Login = () => {
	const form = useForm();
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { username, password } = form.getValues();
		const { data, status } = await AuthService.login({
			username,
			password,
		});
		
		const WRONG_PASSWORD = status === 406
		const SUCCESS = status === 202

		if (WRONG_PASSWORD) {
			return
		}
		else if (SUCCESS) {
			const account = data
			localStorage.setItem('account_id',String(account.account_id))
			localStorage.setItem('username',account.username)
			if (account.token) {
				localStorage.setItem('token',account.token)
			}
			window.location.reload()
			navigate(-1)
		}
	};

	return (
		<CenterContainer className="w-[350px]">
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
											<Input type="password" {...field} />
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
												onCheckedChange={field.onChange}
											/>
										</FormControl>
										<FormLabel className="cursor-pointer">
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
					<CardDescription className="mt-2">
						Doesn't has an account? Create one{" "}
						<a className="underline text-blue-700" href="/register">
							here
						</a>
					</CardDescription>
				</CardContent>
			</Card>
		</CenterContainer>
	);
};

export default Login;
