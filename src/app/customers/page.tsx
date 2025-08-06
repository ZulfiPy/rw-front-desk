import { CustomersDataTable } from "@/app/customers/CustomersDataTable";

export default async function Customers() {
  return (
    <div className={"container mx-auto flex flex-col items-center "}>
      <div className={"mt-6"}>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-center sm:text-left filter brightness-125 animate-pulse">
          Customers
        </h1>

        <div>
          {/*<DataTable columns={columns} data={data}></DataTable>*/}
          <CustomersDataTable />
        </div>
      </div>
    </div>
  );
}
