import type React from "react";

import { Sidebar } from "@/features/sidebar";
import Header from "@/layouts/header";
import { cn } from "@/lib/utils";
import { SidebarProvider } from "@/provider/sidebar-provider";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen bg-background">
        <Sidebar />
        <div
          className={cn(
            "flex flex-col transition-all duration-300 ease-in-out",
            "lg:ml-64",
          )}
        >
          <Header />
          <main className="flex-1 p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
