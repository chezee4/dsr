export const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "es", label: "Español" },
  { value: "fr", label: "Français" },
  { value: "de", label: "Deutsch" },
] as const;

export const TIMEZONES = [
  { value: "UTC", label: "UTC" },
  { value: "EST", label: "Eastern Time" },
  { value: "PST", label: "Pacific Time" },
  { value: "CET", label: "Central European Time" },
] as const;

export const NOTIFICATION_OPTIONS = [
  {
    id: "emailNotifications",
    title: "Email Notifications",
    description: "Receive notifications via email",
  },
  {
    id: "pushNotifications",
    title: "Push Notifications",
    description: "Receive push notifications in your browser",
  },
  {
    id: "marketingEmails",
    title: "Marketing Emails",
    description: "Receive emails about new features and updates",
  },
] as const;
