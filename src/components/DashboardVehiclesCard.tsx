import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardVehiclesCard = () => {
  return (
    <div className="flex-1 min-w-[280px] max-w-[300px] p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-base sm:text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
        Vehicles
      </h2>
      <div className="relative h-80">
        <div className="overflow-y-auto pb-2 h-64">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-xs text-white font-bold">?</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  BMW X5
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  2019
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-sm font-bold text-blue-800 dark:text-blue-300 font-mono">
                400BYH
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-xs text-white font-bold">?</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Toyota Camry
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  2023
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-sm font-bold text-blue-800 dark:text-blue-300 font-mono">
                429VKD
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-xs text-white font-bold">?</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Toyota Camry
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  2023
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-sm font-bold text-blue-800 dark:text-blue-300 font-mono">
                429VKD
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-xs text-white font-bold">?</span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Toyota Camry
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  2023
                </span>
              </div>
            </div>
            <div className="text-right">
              <div className="inline-flex items-center px-2.5 py-1.5 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-sm font-bold text-blue-800 dark:text-blue-300 font-mono">
                429VKD
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/95 to-white/20 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-800/20 flex items-center justify-center">
          <Button
            asChild
            className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-600 backdrop-blur-sm"
          >
            <Link href="/vehicles" className="flex items-center gap-2">
              View all vehicles
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DashboardVehiclesCard;
