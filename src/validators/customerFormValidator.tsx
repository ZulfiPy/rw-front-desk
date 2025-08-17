import { z } from "zod";

export const residencySchema = z.object({
  isEstonianResident: z.boolean({
    error: "Please select your residency status.",
  }),
});

export const detailsSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(100, "First name must not exceed 100 characters.")
    .transform((val) => val.trim()),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(100, "Last name must not exceed 100 characters.")
    .transform((val) => val.trim()),
  personalID: z
    .string()
    .regex(/^\d{11}$/, "Personal ID must be exactly 11 digits.")
    .optional(),
  dateOfBirth: z
    .date()
    .refine((date) => {
      const today = new Date();
      const age = today.getFullYear() - date.getFullYear();
      const monthDiff = today.getMonth() - date.getMonth();
      const actualAge =
        monthDiff < 0 || (monthDiff === 0 && today.getDate() < date.getDate())
          ? age - 1
          : age;
      return actualAge >= 18;
    }, "You must be at least 18 years old.")
    .refine((date) => date < new Date(), "Date of birth must be in the past."),
  phone: z
    .string()
    .regex(
      /^\+?[1-9]\d{1,14}$/,
      "Please enter a valid phone number (digits only after country code).",
    ),
  email: z
    .email("Please enter a valid email address")
    .max(255, "Email must not exceed 255 characters"),
  address: z
    .string()
    .min(1, "Address is required")
    .max(100, "Address must not exceed 100 characters.")
    .transform((val) => val.trim()),
  driversLicense: z
    .string()
    .min(1, "Driver's license is required.")
    .max(100, "Driver's license must not exceed 100 characters.")
    .transform((val) => val.trim()),
});

export const customerFormSchema = residencySchema.merge(detailsSchema).refine(
  (data) => {
    if (data.isEstonianResident && !data.personalID) {
      return false;
    }
    return true;
  },
  {
    message: "Personal ID is required for Estonian residents.",
    path: ["personalID"],
  },
);

export type ResidencyFormData = z.infer<typeof residencySchema>;
export type DetailsFormData = z.infer<typeof detailsSchema>;
export type CustomerFormData = z.infer<typeof customerFormSchema>;
