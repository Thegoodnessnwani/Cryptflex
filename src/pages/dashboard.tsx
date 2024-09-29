import { useAuth } from "@/hooks/use-contexts";
import { Navigate } from "react-router-dom";
import { signOutUser } from "@/firebase/auth";
import { toast } from "sonner";

export default function Dashboard() {
    const { userLoggedIn, loading, userFullData, currentUser } = useAuth();

    if (!userLoggedIn && !loading) {
        toast.warning("Login to access dashboard");
        return <Navigate to="/onboarding" replace={true} />;
    }

    console.log(loading ? "Loading..." : userFullData, currentUser?.uid);
    return (
        <section>
            <button onClick={() => signOutUser()}>Logout</button>
        </section>
    );
}
