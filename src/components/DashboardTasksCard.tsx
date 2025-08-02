const DashboardTasksCard = () => {
    return (
        <div
            className="sm:col-start-1 sm:row-start-2 lg:col-start-3 lg:row-span-2  p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h2 className="text-base sm:text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Tasks</h2>
            <div className="h-32 sm:h-full overflow-y-auto">
                <div>
                    <div
                        className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">ARVED</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-red-500"></div>
                            <span className="text-xs font-medium text-red-600 dark:text-red-400">High</span>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
                            <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Winter tyres</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs font-medium text-green-600 dark:text-green-400">Low</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardTasksCard;