import { Routes, Route } from "react-router-dom";
import BuyerAccount from "../components/dashboard/buyer-account";
import BuyerInstallment from "../components/dashboard/buyer-installments";
import BuyerSettings from "../components/dashboard/buyer-settings";
import BuyerOrderHistory from "../components/dashboard/buyer-order-history";
import BuyerProducts from "../components/dashboard/buyer-products";

export default function BuyerRoutes() {
    return (
			<Routes>
				{/*
            <Route path="orders" element={<BuyerOrders />} />
            <Route path="wishlist" element={<BuyerWishlist />} /> */}
				{/* Add more buyer-specific routes */}
				<Route path="account" element={<BuyerAccount />} />
				<Route path="installments" element={<BuyerInstallment />} />
				<Route path="settings" element={<BuyerSettings />} />
				<Route path="order-history" element={<BuyerOrderHistory />} />
				<Route path="products" element={<BuyerProducts />} />
			</Routes>
		);
}
