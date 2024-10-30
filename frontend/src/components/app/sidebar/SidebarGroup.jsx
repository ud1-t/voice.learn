import React, { useState } from "react";
import { AppSidebar } from '@/components/app/sidebar/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'


const SidebarGroup = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen((prev) => !prev);
        console.log('Sidebar state:', !isOpen);
    };

  return (
    <SidebarProvider
        style={{
            "--sidebar-width": "12rem",
            "--sidebar-width-mobile": "20rem",
        }}
        value={{ isOpen, toggleSidebar }}
        className="bg-gray-100"
    >
      <AppSidebar />
        <main className={`ml-[${isOpen ? 'var(--sidebar-width)' : '0'}]`}>
            {children}
        </main>
    </SidebarProvider>
  )
}

export default SidebarGroup