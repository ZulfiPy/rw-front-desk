import { Button } from "@/components/ui/button";
import Link from "next/link";

const DashboardTasksCard = () => {
  return (
    <div className="flex-1 min-w-[280px] max-w-[300px] p-4 lg:p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
      <h2 className="text-base sm:text-lg font-semibold mb-4 border-b border-gray-200 pb-2">
        Tasks
      </h2>
      <div className="relative h-80">
        <div className="overflow-y-auto pb-2 h-64">
          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                ARVED
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-xs font-medium text-red-600 dark:text-red-400">
                High
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Winter tyres
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Low
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Winter tyres
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Low
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Winter tyres
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Low
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Winter tyres
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Low
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Winter tyres
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Low
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Winter tyres
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Low
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Winter tyres
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Low
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-full border-2 border-gray-300 dark:border-gray-500"></div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Winter tyres
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs font-medium text-green-600 dark:text-green-400">
                Low
              </span>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white via-white/95 to-white/20 dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-800/20 flex items-center justify-center">
            <Button
              asChild
              className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-6 py-2.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-200 dark:border-gray-600 backdrop-blur-sm"
            >
              <Link href="/tasks" className="flex items-center gap-2">
                View all tasks
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
    </div>
  );
};

export default DashboardTasksCard;
