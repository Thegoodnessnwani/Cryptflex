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
            {/* <Route path="products" element={<MerchantProducts />} />
            <Route path="orders" element={<MerchantOrders />} /> */}
            {/* Add more merchant-specific routes */}
        </Routes>
    );
}
