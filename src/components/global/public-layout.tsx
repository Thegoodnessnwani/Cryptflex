import { Outlet } from "react-router-dom";

export default function PublicLayout() {
    return (
        <main className="h-screen overflow-y-scroll relative  no-scrollbar">
            <div className="w-[45rem] h-[45rem] rounded-[56.3125rem] bg-background-gradient blur-[300px] fixed -z-10 -top-[28rem] -left-[28rem]" />
            <Outlet />
            <div className="w-[45rem] h-[45rem] rounded-[56.3125rem] bg-background-gradient blur-[300px] fixed -z-10 -bottom-[28rem] -right-[28rem]" />
        </main>
    );
}
