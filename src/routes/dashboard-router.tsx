import BuyerDashboard from "@/components/dashboard/buyer-dashboard";
import MerchantDashboard from "@/components/dashboard/merchant-dashboard";
import { useAuth } from "@/hooks/use-contexts";

export default function DashboardRouter() {
    const { userFullData } = useAuth();
    return userFullData?.role == "merchant" ? (
        <MerchantDashboard />
    ) : (
        <BuyerDashboard />
    );
}
