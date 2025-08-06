"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardSideMenu = () => {
  const pathname = usePathname();

  const menuItems = [
    { href: "/", label: "Dashboard", icon: "📊" },
    { href: "/customers", label: "Customers", icon: "👥" },
    { href: "/vehicles", label: "Vehicles", icon: "🚗" },
    { href: "/tasks", label: "Tasks", icon: "✅" },
    { href: "/settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow shadow-sm">
        <div className="p-4 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold px-4 text-gray-900 dark:text-gray-100">
            Menu
          </h2>
        </div>
        <nav className={"flex-1 p-4 space-y-2"}>
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
                {item.icon} {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
export default DashboardSideMenu;
