import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "@components";

import LandingPage from "pages/Client/LandingPage";
const ClientSettings = React.lazy(() => import("pages/Client/ClientSettings"));
const Properties = React.lazy(() => import("pages/Client/Properties"));
const PropertyDetails = React.lazy(() =>
  import("pages/Client/PropertyDetails")
);
const LandingPageAdmin = React.lazy(() => import("pages/Admin/LandingPage"));
const ListingPage = React.lazy(() => import("pages/Admin/Listings"));

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties" element={<Properties />} />
          <Route
            path="/settings"
            element={
              <>
                <SignedIn>
                  <ClientSettings />
                </SignedIn>
                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route path="/property/:id" element={<PropertyDetails />} />

          <Route
            path="*"
            element={
              <h1>
                Not Found{" "}
                <Link to="/">
                  <Button>Back to Home</Button>
                </Link>
              </h1>
            }
          />
          {/* Additional routes go here */}
          <Route path="/admin/dashboard" element={<LandingPageAdmin />}></Route>
          <Route path="/admin/listings" element={<ListingPage />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default AppRoutes;
