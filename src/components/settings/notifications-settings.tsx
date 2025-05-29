import { Bell } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { NOTIFICATION_OPTIONS } from "@/lib/constants/settings";
import { SettingsFormValues } from "@/lib/validations/settings";

type NotificationField = Extract<
  keyof SettingsFormValues,
  "emailNotifications" | "pushNotifications" | "marketingEmails"
>;

interface NotificationsSettingsProps {
  form: UseFormReturn<SettingsFormValues>;
}

export function NotificationsSettings({ form }: NotificationsSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bell className="h-5 w-5" />
          Notifications
        </CardTitle>
        <CardDescription>
          Configure how you receive notifications.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {NOTIFICATION_OPTIONS.map((option) => (
          <div key={option.id} className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base">{option.title}</Label>
              <div className="text-sm text-muted-foreground">
                {option.description}
              </div>
            </div>
            <Switch
              checked={form.watch(option.id as NotificationField)}
              onCheckedChange={(checked) =>
                form.setValue(option.id as NotificationField, checked)
              }
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
