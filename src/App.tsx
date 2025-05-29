import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

import { ThemeProvider } from "@/provider/theme-provider";
import { router } from "@/routes";

export default function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="dashboard-theme">
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
