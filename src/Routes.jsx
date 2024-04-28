import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "@components";

import LandingPage from "pages/Client/LandingPage";
import AdminLogin from "pages/Admin/AdminLogin/AdminLogin";
import { Toaster } from "react-hot-toast";
import AdminProtected from "./utils/AdminProtected";

const ClientSettings = React.lazy(() => import("pages/Client/ClientSettings"));
const Properties = React.lazy(() => import("pages/Client/Properties"));
const WishListed = React.lazy(() => import("pages/Client/Wishlisted"));

const PropertyDetails = React.lazy(() =>
  import("pages/Client/PropertyDetails")
);
const LandingPageAdmin = React.lazy(() => import("pages/Admin/LandingPage"));
const ListingPage = React.lazy(() => import("pages/Admin/Listings"));
const Personalinfo = React.lazy(() => import("pages/Admin/PersonalDetail"));
const AddProperty = React.lazy(() => import("pages/Admin/AddProperty"));
const SALanding = React.lazy(() => import("pages/SuperAdmin/Landing"));
const SAListing = React.lazy(() => import("pages/SuperAdmin/Listings"));
const SAListingReq = React.lazy(() => import("pages/SuperAdmin/ListingReq"));
const Log = React.lazy(() => import("pages/SuperAdmin/Log"));

const AppRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Toaster position="top-center" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/wishlisted" element={<WishListed />} />
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

          <Route path="/admin/login" element={<AdminLogin />} />
          {/* Additional routes go here */}
          <Route path="/admin/dashboard" element={<AdminProtected><LandingPageAdmin /></AdminProtected>}></Route>
          <Route path="/admin/listings" element={<AdminProtected><ListingPage /></AdminProtected>} />
          <Route path="/admin/user/info" element={<Personalinfo />} />
          <Route path="/admin/add-property" element={<AdminProtected><AddProperty /></AdminProtected>} />
          <Route path="/super-admin/dashboard" element={<SALanding />} />
          <Route path="/super-admin/listings" element={<SAListing />} />
          <Route
            path="/super-admin/listing/requests"
            element={<SAListingReq />}
          />
          <Route path="/super-admin/payment" element={<Log />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default AppRoutes;
