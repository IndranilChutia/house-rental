import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// const LandingPage = React.lazy(() => import("pages/LandingPage"));
import LandingPage from "pages/Client/LandingPage";
const ClientSettings = React.lazy(() => import("pages/Client/ClientSettings"));
import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

const AppRoutes = () => {
    return (
        <React.Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/properties" element={<LandingPage />} />
                    <Route path="/settings" element={
                        <>
                            <SignedIn><ClientSettings /></SignedIn>
                            <SignedOut><RedirectToSignIn /></SignedOut>
                        </>
                    }
                    />
                </Routes>
            </BrowserRouter>
        </React.Suspense>
    );
};

export default AppRoutes;