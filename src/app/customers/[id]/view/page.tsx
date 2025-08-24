import { Driver } from "@/types/driver";
import { CustomerNotFoundComponent } from "@/components/CustomerNotFound";
import { CustomerViewCard } from "@/components/CustomerViewCard";

async function fetchCustomerWithId(id: string): Promise<Driver | null> {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/drivers/${id}`, {
      cache: "no-cache",
    });

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching customer with id ${id}:`, error);
    return null;
  }
}

export default async function ViewCustomer({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const driver = await fetchCustomerWithId(id);

  if (!driver) {
    return <CustomerNotFoundComponent id={id} />;
  }

  return (
    <div className="container mx-auto min-h-screen flex flex-col items-center">
      <div className="mt-12 space-y-10 w-full">
        <div className="flex justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100 drop-shadow-[0_0_20px_rgba(0,0,0,0.6)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.6)] text-center sm:text-left filter brightness-125 animate-pulse">
            Customer #{id}
          </h1>
        </div>

        <CustomerViewCard driver={driver} />
      </div>
    </div>
  );
}
