"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleIcon,
  Ellipsis,
  House,
  Menu,
  ScanFace,
  Signature,
  TimerReset,
  UserPlus,
} from "lucide-react";

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
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

interface NavItem {
  href: string;
  label: string;
  icon: React.ComponentType;
}

const mainNavItems: NavItem[] = [
  { href: "/weekly", label: "Weekly", icon: TimerReset },
  { href: "/agreement", label: "Agreement", icon: Signature },
  { href: "/to-do", label: "To Do", icon: CircleIcon },
  { href: "/more", label: "More", icon: Ellipsis },
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
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={"/"}
                    className="flex-row gap-2 border-1 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 hover:from-gray-100 hover:via-slate-100 hover:to-gray-200 text-gray-800 hover:text-gray-900 dark:from-sky-50 dark:via-blue-50 dark:to-white dark:text-gray-900 dark:hover:from-blue-100 dark:hover:via-sky-100 dark:hover:to-gray-100 dark:hover:text-gray-700 transition-all duration-200"
                  >
                    <House className="h-4 w-4" />
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            {mainNavItems.map(({ href, label, icon: Icon }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={href}
                    className="flex-row gap-2 border-1 bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 hover:from-gray-100 hover:via-slate-100 hover:to-gray-200 text-gray-800 hover:text-gray-900 dark:from-sky-50 dark:via-blue-50 dark:to-white dark:text-gray-900 dark:hover:from-blue-100 dark:hover:via-sky-100 dark:hover:to-gray-100 dark:hover:text-gray-700 transition-all duration-200"
                  >
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
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={"/sign-in"}
                    className="flex-row gap-2 border-1 bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white hover:from-gray-900 hover:via-gray-800 hover:to-slate-800 hover:text-gray-200 dark:from-sky-50 dark:via-blue-50 dark:to-white dark:text-gray-900 dark:hover:from-blue-100 dark:hover:via-sky-100 dark:hover:to-gray-100 dark:hover:text-gray-700 transition-all duration-200"
                  >
                    <ScanFace className={"h-4 w-4"} />
                    Sign in
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={"/register"}
                    className="flex-row gap-2 border-1 bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white hover:from-gray-900 hover:via-gray-800 hover:to-slate-800 hover:text-gray-200 dark:from-sky-50 dark:via-blue-50 dark:to-white dark:text-gray-900 dark:hover:from-blue-100 dark:hover:via-sky-100 dark:hover:to-gray-100 dark:hover:text-gray-700 transition-all duration-200"
                  >
                    <UserPlus className="h-4 w-4" />
                    Register
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ThemeToggle />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden flex justify-between items-center px-4 py-2 container mx-auto">
        <div className="flex-1 flex justify-start">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={"/"}
                    className={
                      "flex-row gap-2 border-2 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    }
                  >
                    <House className="h-4 w-4" />
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/*className={"bg-gray-100 dark:bg-gray-900"}*/}
        <div className={"flex items-center gap-2"}>
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open mobile menu"
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={"bg-gray-100 dark:bg-gray-900"}>
              {mainNavItems.map(({ href, label, icon: Icon }) => (
                <DropdownMenuItem
                  key={href}
                  className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <Link href={href} className="flex items-center gap-2">
                    <Icon />
                    {label}
                  </Link>
                </DropdownMenuItem>
              ))}

              <DropdownMenuSeparator
                className={"bg-gray-300 dark:bg-gray-600"}
              />

              <DropdownMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <Link
                  href={"/sign-in"}
                  className={
                    "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 hover:shadow-md dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm flex flex-row gap-2 px-4 py-2 rounded-lg"
                  }
                >
                  <ScanFace className={"h-4 w-4"} />
                  SIGN IN
                </Link>
              </DropdownMenuItem>

              <DropdownMenuItem className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
                <Link
                  href={"/register"}
                  className={
                    "bg-gray-900 text-white border border-gray-900 hover:bg-gray-800 hover:text-white hover:shadow-lg dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-900 transition-all duration-200 flex flex-row gap-2 px-4 py-2 rounded-lg"
                  }
                >
                  <UserPlus className="h-4 w-4" />
                  REGISTER
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
