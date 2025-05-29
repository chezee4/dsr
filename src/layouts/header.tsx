import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UserDropdown } from "@/components/user/user-dropdown";
import { useSidebar } from "@/provider/sidebar-provider";

export default function Header() {
  const { openSidebar } = useSidebar();
  return (
    <header className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={openSidebar}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Open sidebar</span>
      </Button>
      <div className="h-6 w-px bg-border lg:hidden" />
      <div className="flex gap-x-4 self-center ml-auto lg:gap-x-6">
        <UserDropdown />
      </div>
    </header>
  );
}
