const DashboardCustomersCard = () => {
    return (
        <div className="sm:col-start-2 sm:row-start-2 lg:col-start-1 lg:row-start-2 bg-white p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
            <h2 className="text-base sm:text-lg font-semibold mb-4 text-gray-800 border-b border-gray-200 pb-2">Customers</h2>
            <div className="h-32 sm:h-full overflow-y-auto">{/* Customer content */}</div>
        </div>
    )
}

export default DashboardCustomersCard;