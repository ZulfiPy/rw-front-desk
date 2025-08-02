import MainFooter from "@/components/MainFooter";
import DashboardHeader from "@/components/DashboardHeader";
import DashboardSideMenu from "@/components/DashboardSideMenu";
import DashboardQuickStartCards from "@/components/DashboardQuickStartCards";
import DashboardTasksCard from "@/components/DashboardTasksCard";
import DashboardCustomersCard from "@/components/DashboardCustomersCard";
import DashboardVehiclesCard from "@/components/DashboardVehiclesCard";

export default function Home() {
    return (
        <div>
            <DashboardHeader />

            <div className={"flex min-h-screen bg-gray-50"}>
                <DashboardSideMenu />


                <div className={"flex-1"}>

                    <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:justify-center ">
                        <div className="mt-6">
                            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-900 via-red-800 to-blue-900 bg-clip-text text-transparent drop-shadow-lg text-center sm:text-left">
                                Dashboard
                            </h1>

                            <DashboardQuickStartCards />

                            <div className="grid gap-3 sm:gap-4 lg:gap-[10px] mt-6
                                          grid-cols-1 sm:grid-cols-2 sm:grid-rows-[120px_300px_300px] lg:grid-cols-[300px_300px_300px] lg:grid-rows-[120px_300px]">

                                {/* Welcome card - spans full width on mobile, 2 cols on desktop */}
                                <div className="sm:col-span-2 lg:col-span-2 p-4 lg:p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-xl shadow-lg border border-blue-200 flex items-center justify-center hover:shadow-xl transition-shadow">
                                    <span className="text-lg sm:text-xl font-semibold">Welcome, Zulfugar!</span>
                                </div>

                                {/* Tasks */}
                                <DashboardTasksCard />

                                {/* Customers */}
                                <DashboardCustomersCard />

                                {/* Vehicles */}
                                <DashboardVehiclesCard />
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            <MainFooter />
        </div>
    );
}