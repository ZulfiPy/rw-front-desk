import {PersonStanding} from "lucide-react";

const DashboardHeader = () => {
    return (
        <header className="hadow-sm border-b border-gray-200">
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <h1 className="text-xl font-bold ">RW-Rent OÜ</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button className="">
                            <span className="sr-only">Notifications</span>
                            🔔
                        </button>
                        <div className="flex items-center space-x-2">
                            {/*<img className="h-8 w-8 rounded-full" src="/avatar.jpg" alt="User" />*/}
                            <span>
                                    <PersonStanding/>
                                </span>
                            <span className="text-sm font-medium">Zulfugar
                                </span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default DashboardHeader;