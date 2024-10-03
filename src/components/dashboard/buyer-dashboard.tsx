import { useAuth } from "@/hooks/use-contexts";
import { signOutUser } from "@/firebase/auth";

export default function BuyerDashboard() {
    const { userFullData } = useAuth();
    return (
        <section>
            Welcome {userFullData?.firstName + " " + userFullData?.lastName} to
            your {userFullData?.role} dashboard
            <button
                onClick={() => {
                    signOutUser();
                }}
                className="bg-red-500 text-white p-2 rounded-md block"
            >
                Sign out
            </button>
        </section>
    );
}
