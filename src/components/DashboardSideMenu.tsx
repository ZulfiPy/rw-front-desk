const DashboardSideMenu = () => {
    return (
        <div className="hidden lg:flex lg:w-64 lg:flex-col">
            <div className="flex flex-col flex-grow shadow-sm">
                <div className="p-4 border-b">
                    <h2 className="text-lg font-semibold px-4">Menu</h2>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    <a href="#" className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md">
                        📊 Dashboard
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                        👥 Customers
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                        🚗 Vehicles
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                        ✅ Tasks
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md">
                        ⚙️ Settings
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default DashboardSideMenu;