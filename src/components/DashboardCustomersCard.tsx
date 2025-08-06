const DashboardCustomersCard = () => {
  return (
    <div className="sm:col-start-2 sm:row-start-2 lg:col-start-1 lg:row-start-2 p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-base sm:text-lg font-semibold mb-4  border-b border-gray-200 pb-2">
        Customers
      </h2>
      <div className="h-50 overflow-y-auto">
        <div>
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-sm text-white font-bold">OK</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Oliver Kikas
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  38901234567
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/20 text-sm font-bold text-green-800 dark:text-green-300 font-mono">
                400BYH
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center">
                <span className="text-sm text-white font-bold">NF</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Nikita Fillipenko
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  37512345678
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-green-100 dark:bg-green-900/20 text-sm font-bold text-green-800 dark:text-green-300 font-mono">
                429VKD
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <span className="text-sm text-white font-bold">RJ</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Robert Johnson
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                  35203456789
                </span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs text-gray-400 dark:text-gray-500 italic">
                No vehicle
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCustomersCard;
