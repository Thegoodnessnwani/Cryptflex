import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../dashboard/header";
import { useAuth } from "@/hooks/use-contexts";
import Sidebar from "../dashboard/sidebar";

export default function DashboardLayout() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { userFullData } = useAuth();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col lg:flex-row">
            <Sidebar
                user={userFullData}
                isOpen={isSidebarOpen}
                onClose={() => setIsSidebarOpen(false)}
            />
            <main className="flex flex-col flex-grow">
                <Header user={userFullData} onMenuClick={toggleSidebar} />
                <div className="flex-grow overflow-y-auto p-4 lg:p-6 not-scrollbar">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
