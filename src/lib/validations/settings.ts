import { z } from "zod";

export const settingsSchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  adminEmail: z.string().email("Invalid email address"),
  timezone: z.string(),
  language: z.string(),
  emailNotifications: z.boolean(),
  pushNotifications: z.boolean(),
  marketingEmails: z.boolean(),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .optional(),
});

export type SettingsFormValues = z.infer<typeof settingsSchema>;
