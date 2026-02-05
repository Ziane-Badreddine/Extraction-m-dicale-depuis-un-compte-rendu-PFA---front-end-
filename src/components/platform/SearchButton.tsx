"use client";

import { Search } from "lucide-react";
import {
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useSearchDialog } from "@/store/search-dialog-store";

export function SearchButton() {
  const { setOpen } = useSearchDialog();
  const { isMobile, toggleSidebar } = useSidebar();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip="Rechercher"
        onClick={() => {
          setOpen(true);
          if (isMobile) toggleSidebar();
        }}
        className="cursor-pointer"
      >
        <Search className="size-5" />
        <span>Rechercher</span>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
