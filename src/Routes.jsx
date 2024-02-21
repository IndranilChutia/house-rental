import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const LandingPage = React.lazy(() => import("pages/LandingPage"));
import LandingPage from "./pages/LandingPage";

const AppRoutes = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
};

export default AppRoutes;