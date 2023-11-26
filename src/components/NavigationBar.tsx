import React, { useEffect, useState } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle,
} from "../components/shadcn/NevigationMenu";
import { cn } from "../lib/utils";
import { ListItem } from "./shadcn/ListItem";
import { components } from "../constants/NavigationBarData";
import Register from "./../views/Register";
import {
	DropdownMenu,
	DropdownMenuTrigger,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubTrigger,
	DropdownMenuPortal,
	DropdownMenuSubContent,
} from "./shadcn/DropdownMenu";
import { Button } from "./shadcn/Button";
import {
	User,
	CreditCard,
	Settings,
	Keyboard,
	Users,
	UserPlus,
	Mail,
	MessageSquare,
	PlusCircle,
	Plus,
	Github,
	LifeBuoy,
	Cloud,
	LogOut,
} from "lucide-react";
import { AuthService } from "../services/Auth.service";

const ProfileDropdown = ({ children }: { children: React.ReactNode }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				<DropdownMenuLabel>My Account</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<User className="mr-2 h-4 w-4" />
						<span>Profile</span>
						<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<CreditCard className="mr-2 h-4 w-4" />
						<span>Billing</span>
						<DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Settings className="mr-2 h-4 w-4" />
						<span>Settings</span>
						<DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
					</DropdownMenuItem>
					<DropdownMenuItem>
						<Keyboard className="mr-2 h-4 w-4" />
						<span>Keyboard shortcuts</span>
						<DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuGroup>
					<DropdownMenuItem>
						<Users className="mr-2 h-4 w-4" />
						<span>Team</span>
					</DropdownMenuItem>
					<DropdownMenuSub>
						<DropdownMenuSubTrigger>
							<UserPlus className="mr-2 h-4 w-4" />
							<span>Invite users</span>
						</DropdownMenuSubTrigger>
						<DropdownMenuPortal>
							<DropdownMenuSubContent>
								<DropdownMenuItem>
									<Mail className="mr-2 h-4 w-4" />
									<span>Email</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<MessageSquare className="mr-2 h-4 w-4" />
									<span>Message</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<PlusCircle className="mr-2 h-4 w-4" />
									<span>More...</span>
								</DropdownMenuItem>
							</DropdownMenuSubContent>
						</DropdownMenuPortal>
					</DropdownMenuSub>
					<DropdownMenuItem>
						<Plus className="mr-2 h-4 w-4" />
						<span>New Team</span>
						<DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
					</DropdownMenuItem>
				</DropdownMenuGroup>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<Github className="mr-2 h-4 w-4" />
					<span>GitHub</span>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<LifeBuoy className="mr-2 h-4 w-4" />
					<span>Support</span>
				</DropdownMenuItem>
				<DropdownMenuItem disabled>
					<Cloud className="mr-2 h-4 w-4" />
					<span>API</span>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem>
					<LogOut className="mr-2 h-4 w-4" />
					<span>Log out</span>
					<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

const NavigationBar = (/* { isLogin = false }: { isLogin?: boolean } */) => {

	const [isLogin, setIsLogin] = useState(false);

	const customNavigationMenuTriggerStyle = () => {
		return (
			navigationMenuTriggerStyle() +
			" bg-green-600 hover:bg-green-700 hover:text-white text-white"
		);
	};

	useEffect(() => {
		const token = localStorage.getItem("token");
		const account_id = Number(localStorage.getItem("account_id"));

		if (!token || !account_id) {
			return
		}

		AuthService.authorize({ token, account_id }).then(response => {
			console.log(response)
			if (response.result) {
				setIsLogin(true)
			}
		})
	})

	return (
		<NavigationMenu className="bg-green-600">
			{/* <div className="flex w-screen"> */}
			<NavigationMenuList className="flex w-screen justify-between">
				<div className="flex gap-1">
					<NavigationMenuItem className="">
						<NavigationMenuLink
							className={customNavigationMenuTriggerStyle()}
						>
							Home
						</NavigationMenuLink>
					</NavigationMenuItem>
					{/* <NavigationMenuItem>
						<NavigationMenuTrigger>
							Getting started
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3">
									<NavigationMenuLink asChild>
										<a
											className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
											href="/"
										> */}
					{/* <Icons.logo className="h-6 w-6" /> */}
					{/* <div className="mb-2 mt-4 text-lg font-medium">
												shadcn/ui
											</div>
											<p className="text-sm leading-tight text-muted-foreground">
												Beautifully designed components
												built with Radix UI and Tailwind
												CSS.
											</p>
										</a>
									</NavigationMenuLink>
								</li>
								<ListItem href="/docs" title="Introduction">
									Re-usable components built using Radix UI
									and Tailwind CSS.
								</ListItem>
								<ListItem
									href="/docs/installation"
									title="Installation"
								>
									How to install dependencies and structure
									your app.
								</ListItem>
								<ListItem
									href="/docs/primitives/typography"
									title="Typography"
								>
									Styles for headings, paragraphs, lists...etc
								</ListItem>
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<NavigationMenuTrigger>
							Components
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{components.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem> */}
				</div>
				<div className="flex gap-1 pr-1">
					{!isLogin ? (
						<>
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/login"
									className={customNavigationMenuTriggerStyle()}
								>
									Login
								</NavigationMenuLink>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<NavigationMenuLink
									href="/register"
									className={customNavigationMenuTriggerStyle()}
								>
									Register
								</NavigationMenuLink>
							</NavigationMenuItem>
						</>
					) : (
						<>
							<NavigationMenuItem>
								<ProfileDropdown>
									<NavigationMenuLink
										className={customNavigationMenuTriggerStyle()}
										href="#"
									>
										{localStorage.getItem("username")}
									</NavigationMenuLink>
								</ProfileDropdown>
							</NavigationMenuItem>
						</>
					)}
				</div>
			</NavigationMenuList>
			{/* </div> */}
		</NavigationMenu>
	);
};

export default NavigationBar;
