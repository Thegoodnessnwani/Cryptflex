import Inprogress from "@/components/dashboard/in-progress";
import ProductManagement from "@/pages/product-management";
import ProductUpload from "@/pages/product-upload";
import { Route, Routes } from "react-router-dom";

export default function MerchantRoutes() {
    return (
        <Routes>
            <Route path="product-management" element={<ProductManagement />} />
            <Route
                path="product-management/product-upload"
                element={<ProductUpload />}
            />
                        <Route
                path="order-management"
                element={<Inprogress />}
            />
                                    <Route
                path="payments-and-earnings"
                element={<Inprogress />}
            />
                                                <Route
                path="analytics-and-reports"
                element={<Inprogress />}
            />
                                                            <Route
                path="inbox"
                element={<Inprogress />}
            />
                                                                        <Route
                path="settings"
                element={<Inprogress />}
            />
            {/* <Route path="products" element={<MerchantProducts />} />
            <Route path="orders" element={<MerchantOrders />} /> */}
            {/* Add more merchant-specific routes */}
        </Routes>
    );
}
