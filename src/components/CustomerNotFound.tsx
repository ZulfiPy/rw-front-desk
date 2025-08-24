"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface CustomerNotFoundProps {
  id: string;
}

export function CustomerNotFoundComponent({ id }: CustomerNotFoundProps) {
  return (
    <div className="container mx-auto min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-lg w-full">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-red-600 dark:text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.314 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <CardTitle className="text-xl text-red-600 dark:text-red-400">
            Customer Not Found
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            We couldn&#39;t find the customer you&#39;re looking for
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Customer ID:{" "}
              <span className="font-mono font-semibold">#{id}</span>
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            This customer may have been removed or the ID might be incorrect.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => window.history.back()}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={() => (window.location.href = "/customers")}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
            >
              View All Customers
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
