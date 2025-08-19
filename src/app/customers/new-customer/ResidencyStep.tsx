import { UseFormReturn } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { CustomerFormData } from "@/validators/customerFormValidator";

interface ResidencyStepProps {
  form: UseFormReturn<CustomerFormData>;
}

export const ResidencyStep = ({ form }: ResidencyStepProps) => {
  return (
    <div className="space-y-6 flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Residency Information</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please select the customer&apos;s residency status
        </p>
      </div>

      <FormField
        control={form.control}
        name="isEstonianResident"
        render={({ field }) => (
          <FormItem className="space-y-4">
            <FormLabel className="text-lg font-medium">
              Is the customer a resident of Estonia?
            </FormLabel>
            <FormControl>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="resident-yes"
                    value="true"
                    checked={field.value === true}
                    onChange={() => {
                      field.onChange(true);
                      form.setValue("personalID", "");
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor="resident-yes"
                    className="text-sm font-medium cursor-pointer"
                  >
                    Yes, the customer is an Estonian Resident.
                  </label>
                </div>
                <div className="flex items-center space-x-3">
                  <input
                    type="radio"
                    id="resident-no"
                    value="false"
                    checked={field.value === false}
                    onChange={() => {
                      field.onChange(false);
                      form.setValue("personalID", undefined);
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor="resident-no"
                    className="text-sm font-medium cursor-pointer"
                  >
                    No, the customer is not an Estonian resident.
                  </label>
                </div>
              </div>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};
