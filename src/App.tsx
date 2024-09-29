import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import Faq from "./components/global/faq";
import Dashboard from "./pages/dashboard";
import Onboarding from "./pages/onboarding";
import MerchantAuth from "./pages/merchant-auth";
import BuyerAuth from "./pages/buyer-auth";
import Navbar from "./components/global/navbar";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="mt-8">
                                <Navbar />
                            </div>
                            <HomePage />
                        </>
                    }
                />
                <Route
                    path="/faq"
                    element={
                        <>
                            <div className="mt-8">
                                <Navbar />
                            </div>
                            <Faq />
                        </>
                    }
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/onboarding/merchant" element={<MerchantAuth />} />
                <Route path="/onboarding/buyer" element={<BuyerAuth />} />
            </Routes>
        </Router>
    );
}
