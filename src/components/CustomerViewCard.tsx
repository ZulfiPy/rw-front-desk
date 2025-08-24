"use client";

import { Driver } from "@/types/driver";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Copy, Edit, ArrowLeft, Check } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { formatDateArray, formatTimestampArray } from "@/utils/dateUtils";
import { ReactNode } from "react";

interface CustomerViewProfileProps {
  driver: Driver;
}

export function CustomerViewCard({ driver }: CustomerViewProfileProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const router = useRouter();

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const CopyButton = ({
    value,
    fieldName,
  }: {
    value: string | number | null | undefined;
    fieldName: string;
  }) => (
    <Button
      variant="ghost"
      size="sm"
      className="h-6 w-6 p-0"
      onClick={() => copyToClipboard(String(value || ""), fieldName)}
    >
      {copiedField === fieldName ? (
        <Check className="h-3 w-3 text-green-500" />
      ) : (
        <Copy className="h-3 w-3" />
      )}
    </Button>
  );

  const FieldRow = ({
    label,
    value,
    fieldName,
    fullWidth = false,
    children,
  }: {
    label: string;
    value?: string | number | null;
    fieldName?: string;
    fullWidth?: boolean;
    children?: ReactNode;
  }) => (
    <div className={`group ${fullWidth ? "col-span-full" : ""}`}>
      <div className="flex items-center justify-between py-3 px-1 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-lg transition-colors duration-200">
        <div className="flex-1 min-w-0">
          <label className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            {label}
          </label>
          <div className="mt-1">
            {children || (
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 break-words">
                {value || "N/A"}
              </p>
            )}
          </div>
        </div>
        {fieldName && <CopyButton value={value} fieldName={fieldName} />}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 p-4 flex flex-col items-center">
      <Card className="border-0 shadow-lg bg-white-80 dark:bg-gray-900/80 backdrop-blur-sm w-full max-w-3xl">
        <CardHeader className="pb-6">
          <CardTitle className="flex items-center justify-between text-xl font-semibold">
            <span className="text-gray-900 dark:text-gray-100">
              Customer Profile
            </span>
            <Badge variant="outline" className="font-mono text-xs px-3 py-1">
              #{driver.id}
            </Badge>
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 divide-y divide-gray-100 dark:divide-gray-800">
            <FieldRow
              label="First Name"
              value={driver.firstName}
              fieldName="firstName"
            />

            <FieldRow
              label="Last Name"
              value={driver.lastName}
              fieldName="lastName"
            />

            <FieldRow
              label="Personal ID"
              value={driver.personalID}
              fieldName="personalID"
            />

            <FieldRow label="Estonian Resident">
              <Badge
                variant={driver.isEstonianResident ? "default" : "secondary"}
                className="text-xs"
              >
                {driver.isEstonianResident ? "YES" : "NO"}
              </Badge>
            </FieldRow>

            <FieldRow
              label="Date of Birth"
              value={formatDateArray(driver.dateOfBirth)}
              fieldName="dateOfBirth"
            />

            <FieldRow
              label="Phone Number"
              value={driver.phoneNumber}
              fieldName="phoneNumber"
            />

            <FieldRow
              label="Email"
              value={driver.email}
              fieldName="email"
              fullWidth
            />

            <FieldRow
              label="Living Address"
              value={driver.livingAddress}
              fieldName="livingAddress"
              fullWidth
            />

            <FieldRow
              label="Driver's License"
              value={driver.driversLicenseNumber}
              fieldName="driversLicenseNumber"
            />

            <FieldRow
              label="Current Vehicle"
              value={driver.currentVehicle}
              fieldName="currentVehicle"
            />

            <FieldRow
              label="Created"
              value={formatTimestampArray(driver.createdAt)}
            />

            <FieldRow
              label="Last Modified"
              value={formatTimestampArray(driver.lastEditedAt)}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3 justify-center">
        <Button
          variant="outline"
          onClick={() => router.back()}
          className="min-w-[120px] border-gray-200 dark:border-gray-700"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={() => router.push(`/customers/${driver.id}/edit`)}
          className="min-w-[120px] text-gray-100bg-gray-900 hover:bg-gray-800 dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-gray-900"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Customer
        </Button>
      </div>
    </div>
  );
}
