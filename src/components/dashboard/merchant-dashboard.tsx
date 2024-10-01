// import { useAuth } from "@/hooks/use-contexts";
import {
    ChartIcon,
    HappyBagIcon,
    HighVoltageIcon,
    StatusUp,
    UserOctagonIcon,
} from "../svg-components/icons";
import SalesSummaryCard from "./sales-sumary-card";
import { BestSellingProductsTable } from "./best-selling-products-table";
import {
    BestSellingProducts,
    Columns as BestSellingProductsColumns,
} from "../table-columns/best-selling-products-columns";
// const salesSummary = {
//     totalSales: 200,
//     totalRevenue: 1000,
//     averageOrder: 10,
//     totalVisitors: 500,
// };

export default function MerchantDashboard() {
    // const { userFullData } = useAuth();
    const data: BestSellingProducts[] = [
        {
            product_id: "#1",
            product_image: "https://i.pravatar.cc/300",
            product_price: 100,
            product_name: "Round Neck T-Shirt",
            product_total_sales: 100,
            product_stock_count: 100,
            product_status: "in_stock",
        },

        {
            product_id: "#2",
            product_image: "https://i.pravatar.cc/400",
            product_price: 100,
            product_name: "Round Neck T-Shirt",
            product_total_sales: 100,
            product_stock_count: 100,
            product_status: "in_stock",
        },

        {
            product_id: "#3",
            product_image: "https://i.pravatar.cc/600",
            product_price: 100,
            product_name: "Round Neck T-Shirt",
            product_total_sales: 100,
            product_stock_count: 100,
            product_status: "out_of_stock",
        },
    ];
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
            <BestSellingProductsTable
                columns={BestSellingProductsColumns}
                data={data}
            />
        </section>
    );
}
