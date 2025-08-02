const DashboardTasksCard = () => {
    return (
        <div className="sm:col-start-1 sm:row-start-2 lg:col-start-3 lg:row-span-2 bg-white p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Tasks</h2>
            <div className="h-32 sm:h-full overflow-y-auto">{/* Task content */}</div>
        </div>
    )
}

export default DashboardTasksCard;