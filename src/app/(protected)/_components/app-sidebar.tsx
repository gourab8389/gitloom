"use client"

import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";

const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" variant="floating">
        <SidebarHeader>
            Logo
        </SidebarHeader>
    </Sidebar>
  )
}

export default AppSidebar;
