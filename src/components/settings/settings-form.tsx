import { zodResolver } from "@hookform/resolvers/zod";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  settingsSchema,
  type SettingsFormValues,
} from "@/lib/validations/settings";

import { AppearanceSettings } from "./appearance-settings";
import { GeneralSettings } from "./general-settings";
import { NotificationsSettings } from "./notifications-settings";

const defaultValues: SettingsFormValues = {
  companyName: "Acme Corporation",
  adminEmail: "admin@acme.com",
  timezone: "UTC",
  language: "en",
  emailNotifications: true,
  pushNotifications: false,
  marketingEmails: true,
  description:
    "A modern dashboard for managing your business operations efficiently.",
};

export function SettingsForm() {
  const form = useForm<SettingsFormValues>({
    resolver: zodResolver(settingsSchema),
    defaultValues,
  });

  const onSubmit = async (_data: SettingsFormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast.success("Settings saved successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
      toast.error("Failed to save settings");
    }
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-6">
      <AppearanceSettings form={form} />
      <GeneralSettings form={form} />
      <NotificationsSettings form={form} />
      <div className="flex justify-end">
        <Button type="submit" className="w-full md:w-auto">
          <Save className="mr-2 h-4 w-4" />
          Save Changes
        </Button>
      </div>
    </form>
  );
}
