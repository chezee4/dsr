import { Database } from "lucide-react";
import { UseFormReturn } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormInput } from "@/components/ui/form-input";
import { FormTextarea } from "@/components/ui/form-textarea";
import { Label } from "@/components/ui/label";
import { SettingsFormValues } from "@/lib/validations/settings";

interface GeneralSettingsProps {
  form: UseFormReturn<SettingsFormValues>;
}

export function GeneralSettings({ form }: GeneralSettingsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          General
        </CardTitle>
        <CardDescription>
          Basic information about your organization.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <FormInput
              id="companyName"
              {...form.register("companyName")}
              error={form.formState.errors.companyName?.message}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="adminEmail">Admin Email</Label>
            <FormInput
              id="adminEmail"
              type="email"
              {...form.register("adminEmail")}
              error={form.formState.errors.adminEmail?.message}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <FormTextarea
            id="description"
            {...form.register("description")}
            error={form.formState.errors.description?.message}
            rows={3}
          />
        </div>
      </CardContent>
    </Card>
  );
}
