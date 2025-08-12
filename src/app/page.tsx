import DashboardSideMenu from "@/components/DashboardSideMenu";
import DashboardQuickStartCards from "@/components/DashboardQuickStartCards";
import DashboardTasksCard from "@/components/DashboardTasksCard";
import DashboardCustomersCard from "@/components/DashboardCustomersCard";
import DashboardVehiclesCard from "@/components/DashboardVehiclesCard";

export default function Home() {
  const userName = "Zulfugar";

  const gridClasses = [
    "grid gap-3 sm:gap-4 lg:gap-[10px] mt-6",
    "grid-cols-1 sm:grid-cols-2 sm:grid-rows-[120px_300px_300px]",
    "lg:grid-cols-[300px_300px_300px] lg:grid-rows-[120px_300px]",
  ].join(" ");

  return (
    <div>
      <div className={"flex min-h-screen"}>
        <DashboardSideMenu />

        <main className={"flex-1"}>
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 xl:flex xl:justify-center">
            <div className="mt-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-center sm:text-left filter brightness-125 animate-pulse">
                Dashboard
              </h1>

              <DashboardQuickStartCards />

              <div className={gridClasses}>
                <div className="sm:col-span-2 lg:col-span-2 p-4 lg:p-6 bg-gradient-to-r from-blue-150 to-indigo-200 rounded-xl shadow-lg border border-blue-200 flex items-center justify-center hover:shadow-xl transition-shadow">
                  <span className="text-lg sm:text-xl font-semibold">
                    Welcome,
                    <span className="ml-2 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent font-black text-xl sm:text-2xl tracking-wide">
                      {userName}
                    </span>
                    !
                  </span>
                </div>
                <DashboardTasksCard />
                <DashboardCustomersCard />
                <DashboardVehiclesCard />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
