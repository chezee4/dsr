import { BarChart3, Users, Settings, X, TrendingUp } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import { useSidebar } from "../provider/sidebar-provider";

const navigation = [
  {
    name: "Overview",
    href: "/overview",
    icon: BarChart3,
    description: "Dashboard metrics and analytics",
  },
  {
    name: "Users",
    href: "/users",
    icon: Users,
    description: "User management and data",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
    description: "Application configuration",
  },
] as const;

export function Sidebar() {
  const location = useLocation();
  const { isSidebarOpen, closeSidebar } = useSidebar();

  const renderNavigationItems = () => {
    return navigation.map((item) => {
      const isActive = location.pathname === item.href;
      return (
        <li key={item.name}>
          <Link
            to={item.href}
            className={cn(
              "group flex gap-x-3 rounded-md p-3 text-sm font-medium transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <item.icon
              className={cn(
                "h-5 w-5 shrink-0 transition-colors",
                isActive
                  ? "text-primary-foreground"
                  : "text-muted-foreground group-hover:text-accent-foreground",
              )}
            />
            <div className="flex flex-col">
              <span>{item.name}</span>
              <span
                className={cn(
                  "text-xs transition-colors",
                  isActive
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground/70",
                )}
              >
                {item.description}
              </span>
            </div>
          </Link>
        </li>
      );
    });
  };
  return (
    <>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-64 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-card px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <TrendingUp className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">
                Dashboard
              </span>
            </div>
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {renderNavigationItems()}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div
        className={cn(
          "fixed inset-y-0 z-50 flex w-64 flex-col transition-transform duration-300 ease-in-out lg:hidden",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-card px-6 pb-4 shadow-xl">
          <div className="flex h-16 shrink-0 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <TrendingUp className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Dashboard</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeSidebar}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <ScrollArea className="flex-1">
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {renderNavigationItems()}
                  </ul>
                </li>
              </ul>
            </nav>
          </ScrollArea>
        </div>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}
    </>
  );
}
