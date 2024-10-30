import { useCallback, useContext } from 'react'
import { Calendar, Home, Inbox, Search, Settings, CircleHelp, MessageSquareWarning } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarContext,
  SidebarTrigger
} from "@/components/ui/sidebar"

// Menu items
const items = [
  { title: "Home", url: "#", icon: Home },
  { title: "Inbox", url: "#", icon: Inbox },
  { title: "Calendar", url: "#", icon: Calendar },
  { title: "Search", url: "#", icon: Search },
  { title: "Settings", url: "#", icon: Settings },
]

export function AppSidebar() {
  const { open, toggleSidebar } = useContext(SidebarContext); // Use the context

  const handleToggle = useCallback(() => {
      toggleSidebar();
  }, [toggleSidebar]);

  return (
    <Sidebar collapsible="icon">
      <div className="flex items-center justify-between p-2 ">
        {
          open && (
              <span className="text-gray-600 dark:text-white m-2 text-xl">Voice.Learn</span>
          )
        }
        <SidebarTrigger onClick={handleToggle()} className="bg-white dark:bg-dark-950 border border-gray-400 rounded-md p-1">
          Toggle Sidebar
        </SidebarTrigger>
      </div>

      <SidebarContent className="my-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu side="left" variant="sidebar">
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className='my-1'>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className='flex flex-row gap-4'>
                      <item.icon style={{ width: "20px", height: "20px" }} />
                      <span className='text-base'>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu side="left" variant="sidebar">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="www.google.com" className='flex flex-row gap-4'>
                <CircleHelp style={{ width: "20px", height: "20px" }} />
                <span className='text-base'>Help</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="www.google.com" className='flex flex-row gap-4'>
                <MessageSquareWarning style={{ width: "20px", height: "20px" }} />
                <span className='text-base'>Feedback</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
