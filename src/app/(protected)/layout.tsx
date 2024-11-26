import { SidebarProvider } from "@/components/ui/sidebar";
import { UserButton } from "@clerk/nextjs";


type Props = {
    children: React.ReactNode;
}

const SidebarLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
        <main className="w-full m-2">
            {/* Sidebar */}
            <div className="flex items-center gap-2 border-sidebar-border bg-sidebar border shadow rounded-md p-2 px-4">
                {/* Searchbar */}
                <div className="ml-auto"></div>
                <UserButton/>
            </div>
            <div className="h-4"></div>
            {/** Content */}
            <div className="border-sidebar-border bg-sidebar border shadow rounded-md overflow-y-scroll h-[calc(100vh-6rem)] p-4">
                {children}
            </div>
        </main>
    </SidebarProvider>
  )
}

export default SidebarLayout
