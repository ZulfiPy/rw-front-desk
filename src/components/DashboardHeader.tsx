import { PersonStanding } from "lucide-react";

const DashboardHeader = ({ userName }: { userName: string }) => {
  return (
    <header className="hadow-sm border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <h1 className="ml-2 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-100 dark:to-white bg-clip-text text-transparent font-black text-xl sm:text-2xl tracking-wider drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transform hover:scale-105 transition-transform">
              RW-Rent OÜ
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="">
              <span className="sr-only">Notifications</span>
              🔔
            </button>
            <div className="flex items-center space-x-2">
              <span>
                <PersonStanding />
              </span>
              <span className="ml-2 bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-100 dark:to-white bg-clip-text text-transparent font-black text-xl sm:text-2xl tracking-wider drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)] transform hover:scale-105 transition-transform">
                {userName}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardHeader;
