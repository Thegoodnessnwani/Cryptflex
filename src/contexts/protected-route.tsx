import { useAuth } from "@/hooks/use-contexts";
import { Navigate, Outlet } from "react-router-dom";
import { toast } from "sonner";

export default function ProtectedRoute({
    allowedRoles,
}: {
    allowedRoles: string[];
}) {
    const { userLoggedIn, loading, userFullData, currentUser } = useAuth();

    console.log(loading ? "Loading..." : userFullData, currentUser?.uid);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!userLoggedIn && !loading) {
        toast.warning("Login to access dashboard");
        return <Navigate to="/onboarding" replace={true} />;
    }

    if (allowedRoles && !allowedRoles.includes(userFullData?.role)) {
        toast.error("Unauthorized access");
        return <Navigate to="/unathorized-access" replace={true} />;
    }

    return <Outlet />;
}
