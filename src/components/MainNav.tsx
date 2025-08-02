"use client";

import * as React from "react";
import Link from "next/link";
import {CircleIcon, TimerReset, Signature, House, Ellipsis, ScanFace, UserPlus, Menu} from "lucide-react"

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem, DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {ThemeToggle} from "@/components/ThemeToggle";

interface NavItem {
    href: string;
    label: string;
    icon: React.ComponentType;
}

const mainNavItems: NavItem[] = [
    {href: "/weekly", label: "Weekly", icon: TimerReset},
    {href: "/agreement", label: "Agreement", icon: Signature},
    {href: "/to-do", label: "To Do", icon: CircleIcon},
    {href: "/more", label: "More", icon: Ellipsis},
];

const MainNav = () => {

    return (
        <nav>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex justify-between items-center w-full px-4 py-4 border-b-1">
                <div>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={"/"} className={"flex-row gap-2 border-2"}>
                                        <House className="h-4 w-4"/>
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <NavigationMenu>
                    <NavigationMenuList>
                        {mainNavItems.map(({href, label, icon: Icon}) => (
                            <NavigationMenuItem key={href}>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={href} className="flex-row gap-2  border-1">
                                        <Icon />
                                        {label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                <div className="flex">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={"/sign-in"} className={"blue-btn-grad flex-row gap-2"}>
                                        <ScanFace className={"text-black h-4 w-4"}/>
                                        Sign in
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={"/register"} className={"dark-green-btn-grad flex-row gap-2"}>
                                        <UserPlus className="h-4 w-4"/>
                                        Register
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <ThemeToggle/>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className="lg:hidden flex justify-between items-center px-4 py-2  container mx-auto ">
                <div className="flex-1 flex justify-start">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={"/"} className={"flex-row gap-2 border-2"}>
                                        <House className="h-4 w-4"/>
                                        Home
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className={"flex items-center gap-2"}>
                    <ThemeToggle/>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                aria-label="Open mobile menu"
                            >
                                <Menu className="h-4 w-4"/>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className={"bg-gray-100"}>
                            {mainNavItems.map(({href, label, icon: Icon}) => (
                                <DropdownMenuItem key={href}>
                                    <Link href={href} className="flex items-center gap-2">
                                        <Icon/>
                                        {label}
                                    </Link>
                                </DropdownMenuItem>
                            ))}

                            <DropdownMenuSeparator className={"bg-black"}/>

                            <DropdownMenuItem>
                                <Link href={"/sign-in"} className={"blue-btn-grad flex flex-row gap-2 px-4 py-2"}>
                                    <ScanFace className={"text-black h-4 w-4"}/>
                                    Sign in
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuItem>
                                <Link href={"/register"}
                                      className={"dark-green-btn-grad flex flex-row gap-2 px-4 py-2"}>
                                    <UserPlus className="h-4 w-4"/>
                                    Register
                                </Link>
                            </DropdownMenuItem>

                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

            </div>

        </nav>
    );
};

export default MainNav;

