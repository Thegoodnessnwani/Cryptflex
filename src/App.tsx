import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/global/navbar";
import HomePage from "./pages/home-page";
import Faq from "./components/global/faq";
import Dashboard from "./pages/dashboard";
import Onboarding from "./pages/onboarding";
import MerchantAuth from "./pages/merchant-auth";

export default function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/faq"
                    element={
                        <>
                            <Faq />
                        </>
                    }
                />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/onboarding" element={<Onboarding />} />
                <Route path="/onboarding/merchant" element={<MerchantAuth />} />
            </Routes>
        </Router>
    );
}
