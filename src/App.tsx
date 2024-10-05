import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import Faq from "./components/global/faq";
import Unauthorized from "./pages/unathorized";
import PublicLayout from "./components/global/public-layout";
import { lazy, Suspense } from "react";
import DashboardLayout from "./components/global/dashboard-layout";
import Spinner from "./components/svg-components/spinner";
import DashboardRouter from "./routes/dashboard-router";

export default function App() {
    const Navbar = lazy(() => import("./components/global/navbar"));
    const MerchantAuth = lazy(() => import("./pages/merchant-auth"));
    const BuyerAuth = lazy(() => import("./pages/buyer-auth"));
    // const DashboardRouter = lazy(() => import("./routes/dashboard-router"));
    const Onboarding = lazy(() => import("./pages/onboarding"));
    const ProtectedRoute = lazy(() => import("./routes/protected-route"));
    const MerchantRoutes = lazy(() => import("./routes/merchant-routes"));
    const BuyerRoutes = lazy(() => import("./routes/buyer-routes"));

    return (
        <Router>
            <Suspense
                fallback={
                    <div className="h-screen flex flex-col justify-center items-center">
                        <Spinner />
                    </div>
                }
            >
                <Routes>
                    {/* Public Routes */}
                    <Route element={<PublicLayout />}>
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
                        <Route path="/onboarding" element={<Onboarding />} />
                        <Route
                            path="/onboarding/merchant"
                            element={<MerchantAuth />}
                        />
                        <Route
                            path="/onboarding/buyer"
                            element={<BuyerAuth />}
                        />
                        <Route
                            path="/unathorized-access"
                            element={<Unauthorized />}
                        />
                    </Route>

                    {/* Protected Routes */}
                    <Route
                        element={
                            <ProtectedRoute
                                allowedRoles={["merchant", "buyer"]}
                            />
                        }
                    >
                        <Route element={<DashboardLayout />}>
                            <Route
                                path="/dashboard"
                                element={<DashboardRouter />}
                            />
                            <Route
                                path="/merchant/*"
                                element={<MerchantRoutes />}
                            />
                            <Route path="/buyer/*" element={<BuyerRoutes />} />
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </Router>
    );
}
