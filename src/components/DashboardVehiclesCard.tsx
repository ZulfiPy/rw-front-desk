const DashboardVehiclesCard = () => {
    return (
        <div className="sm:col-start-1 sm:row-start-3 sm:col-span-2 lg:col-start-2 lg:row-start-2 lg:col-span-1 p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h2 className="text-base sm:text-lg font-semibold mb-4 border-b border-gray-200 pb-2">Vehicles</h2>
            <div className="h-32 sm:h-full overflow-y-auto">
                <div>
                    <div
                        className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                <span className="text-xs text-white font-bold">?</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">BMW X5</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">2019</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-sm font-bold text-blue-800 dark:text-blue-300 font-mono">
                                400BYH
                            </div>
                        </div>
                    </div>

                    <div
                        className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                                <span className="text-xs text-white font-bold">?</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">Toyota Camry</span>
                                <span className="text-xs text-gray-500 dark:text-gray-400">2023</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-sm font-bold text-blue-800 dark:text-blue-300 font-mono">
                                429VKD
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardVehiclesCard;