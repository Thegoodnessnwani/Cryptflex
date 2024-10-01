// import { useAuth } from "@/hooks/use-contexts";
import {
    ChartIcon,
    HappyBagIcon,
    HighVoltageIcon,
    StatusUp,
    UserOctagonIcon,
} from "../svg-components/icons";
import SalesSummaryCard from "./sales-sumary-card";

// const salesSummary = {
//     totalSales: 200,
//     totalRevenue: 1000,
//     averageOrder: 10,
//     totalVisitors: 500,
// };

export default function MerchantDashboard() {
    // const { userFullData } = useAuth();
    return (
        <section className="space-y-5">
            <h1 className="flex items-center space-x-2 text-xl">
                <HighVoltageIcon />
                <span className="block">Today’s sales Summary</span>
            </h1>
            <div className="space-y-4 sm:space-y-0 sm:grid grid-cols-2 gap-x-4 gap-y-5 xl:grid-cols-4">
                <SalesSummaryCard
                    icon={<HappyBagIcon />}
                    label="Total Sales"
                    amount={200}
                    financialData
                />
                <SalesSummaryCard
                    icon={<StatusUp />}
                    label="Total Revenue"
                    amount={1000}
                    financialData
                />

                <SalesSummaryCard
                    icon={<ChartIcon />}
                    label="Average Order"
                    amount={10}
                    financialData
                />

                <SalesSummaryCard
                    icon={<UserOctagonIcon />}
                    label="Total Visitors"
                    amount={500}
                    financialData={false}
                />
            </div>
        </section>
    );
}
