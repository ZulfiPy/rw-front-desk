const DashboardSideMenu = () => {
  return (
    <div className="hidden lg:flex lg:w-64 lg:flex-col">
      <div className="flex flex-col flex-grow shadow-sm">
        <div className="p-4 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-lg font-semibold px-4 text-gray-900 dark:text-gray-100">
            Menu
          </h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 rounded-md transition-colors"
          >
            📊 Dashboard
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            👥 Customers
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            🚗 Vehicles
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            ✅ Tasks
          </a>
          <a
            href="#"
            className="flex items-center px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
          >
            ⚙️ Settings
          </a>
        </nav>
      </div>
    </div>
  );
};
export default DashboardSideMenu;
