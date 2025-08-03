const DashboardQuickStartCards = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 mb-6">
      <div className="p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-200">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          4
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Total Tasks
        </div>
      </div>
      <div className="p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-200">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          189
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">
          Customers
        </div>
      </div>
      <div className="p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-200">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          248
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Vehicles</div>
      </div>
      <div className="p-4 rounded-lg shadow border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 hover:shadow-lg transition-all duration-200">
        <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          $12.5k
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400">Revenue</div>
      </div>
    </div>
  );
};

export default DashboardQuickStartCards;
