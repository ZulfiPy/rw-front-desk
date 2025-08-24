"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UserSearch,
  Car,
  CheckCheck,
  CreditCard,
  Settings,
} from "lucide-react";

const DashboardSideMenu = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/",
      label: "Dashboard",
      icon: <LayoutDashboard className="mr-2" />,
    },
    { href: "/customers", label: "Customers", icon: <UserSearch /> },
    { href: "/vehicles", label: "Vehicles", icon: <Car /> },
    { href: "/tasks", label: "Tasks", icon: <CheckCheck /> },
    { href: "/payments", label: "Payments", icon: <CreditCard /> },
    { href: "/settings", label: "Settings", icon: <Settings /> },
  ];

  return (
    <>
      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow shadow-sm">
          <div className="p-4 border-b border-gray-200 dark:border-gray-600">
            <h2 className="text-lg font-semibold px-4 text-gray-900 dark:text-gray-100">
              Menu
            </h2>
          </div>
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  href={item.href}
                  key={item.href}
                  className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                    isActive
                      ? "text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  <span className="mr-2">{item.icon}</span> {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Bottom Tab Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-600 z-50">
        <nav className="flex justify-around py-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={item.href}
                className={`flex flex-col items-center px-2 py-1 rounded-md transition-colors ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400"
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-xs mt-1">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default DashboardSideMenu;
