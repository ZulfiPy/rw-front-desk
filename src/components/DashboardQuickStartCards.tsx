const DashboardQuickStartCards = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">Total Tasks</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-green-600">189</div>
                <div className="text-sm text-gray-600">Customers</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-purple-600">248</div>
                <div className="text-sm text-gray-600">Vehicles</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow border">
                <div className="text-2xl font-bold text-orange-600">$12.5k</div>
                <div className="text-sm text-gray-600">Revenue</div>
            </div>
        </div>
    )
}

export default DashboardQuickStartCards;