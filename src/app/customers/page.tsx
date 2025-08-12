import { CustomersDataTable } from "@/app/customers/CustomersDataTable";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

export default async function Customers() {
  return (
    <div
      className={
        "container mx-auto min-h-screen sm:flex sm:flex-col sm:items-center"
      }
    >
      <div className={"mt-6"}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-center sm:text-left filter brightness-125 animate-pulse">
          Customers
        </h1>

        <div
          className={
            "sm:hidden flex justify-center gap-5 items-center mb-4 p-4 bg-gray-50 rounded-lg"
          }
        >
          <div className="flex gap-2 items-center">
            <Link href="/customers/new-customer" className={"flex"}>
              <Plus className="mr-2 h-4 w-4" />
              Add Customer
            </Link>
          </div>
          <div className="text-sm text-gray-600">
            Total customers: {/* data.length */} 254
          </div>
        </div>

        <div>
          <CustomersDataTable />
        </div>

        <div className={"hidden sm:flex"}>
          <Button
            asChild
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
          >
            <Link href="/customers/new-customer">
              <Plus className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
