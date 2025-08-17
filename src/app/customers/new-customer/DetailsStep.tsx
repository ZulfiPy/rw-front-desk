import { UseFormReturn } from "react-hook-form";
import { CustomerFormData } from "@/validators/customerFormValidator";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Calendar } from "lucide-react";

interface DetailsStepProps {
  form: UseFormReturn<CustomerFormData>;
}

export const DetailsStep = ({ form }: DetailsStepProps) => {
  const isEstonianResident = form.watch("isEstonianResident");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (dateString: string) => {
    if (dateString) {
      const date = new Date(dateString);
      form.setValue("dateOfBirth", date);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Personal Details</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please fill in your personal information
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name *</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="Doe"
                  {...field}
                  aria-invalid={!!form.formState.errors.lastName}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {isEstonianResident && (
        <FormField
          control={form.control}
          name="personalID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Personal ID*</FormLabel>
              <FormControl>
                <Input
                  placeholder="39901117799"
                  maxLength={11}
                  {...field}
                  value={field.value || ""}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      )}

      <FormField
        control={form.control}
        name="dateOfBirth"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Date of Birth *</FormLabel>
            <FormControl>
              <div className="relative">
                <Input
                  type="date"
                  {...field}
                  value={
                    field.value ? field.value.toISOString().split("T")[0] : ""
                  }
                  onChange={(e) => handleDateChange(e.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                />
                <Calendar className="absolute right-3 top-2.5 h-4 w-4 text-gray-400 pointer-events-none" />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone *</FormLabel>
              <FormControl>
                <Input
                  placeholder="+372 5555 8899"
                  {...field}
                  aria-invalid={!!form.formState.errors.phone}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email *</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  {...field}
                  aria-invalid={!!form.formState.errors.email}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address *</FormLabel>
            <FormControl>
              <Input
                placeholder="123 Main Street, City"
                {...field}
                aria-invalid={!!form.formState.errors.address}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="driversLicense"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Driver&apos;s License *</FormLabel>
            <FormControl>
              <Input
                placeholder="License number"
                {...field}
                aria-invalid={!!form.formState.errors.driversLicense}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
