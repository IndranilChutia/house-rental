import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { Button } from "@components";

import LandingPage from "pages/Client/LandingPage";
import AdminLogin from "pages/Admin/AdminLogin/AdminLogin";
import { Toaster } from "react-hot-toast";
import AdminProtected from "./utils/AdminProtected";
import SuperAdminProtected from "./utils/SuperAdminProtected";
import LoginSuperAdmin from "pages/SuperAdmin/LoginSuperAdmin";
import PrivacyPolicy from "pages/Client/PrivacyPolicy";

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
          <Route path="/property/:propertyId" element={<PropertyDetails />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />

          <Route
            path="*"
            element={
              <div className="h-screen w-full flex flex-col gap-4 justify-center items-center bg-zinc-100">
                <span className="font-bold text-xl">(404) You are Lost!!!</span>
                <Link to="/">
                  <Button>Return Back Home</Button>
                </Link>
              </div>
            }
          />

          <Route path="/admin/login" element={<AdminLogin />} />
          {/* Additional routes go here */}
          {/* <Route exact path="/admin"><Redirect to="dashboard" /></Route> */}
          <Route path="/admin/dashboard" element={<AdminProtected><LandingPageAdmin /></AdminProtected>}></Route>
          <Route path="/admin/listings" element={<AdminProtected><ListingPage /></AdminProtected>} />
          <Route path="/admin/user/info" element={<Personalinfo />} />
          <Route path="/admin/add-property" element={<AdminProtected><AddProperty /></AdminProtected>} />


          <Route path="/super-admin/login" element={<LoginSuperAdmin />} />
          <Route path="/super-admin/dashboard" element={<SuperAdminProtected><SALanding /></SuperAdminProtected>} />
          <Route path="/super-admin/listings" element={<SuperAdminProtected><SAListing /></SuperAdminProtected>} />
          <Route
            path="/super-admin/listing/requests"
            element={<SuperAdminProtected><SAListingReq /></SuperAdminProtected>}
          />
          <Route path="/super-admin/payment" element={<SuperAdminProtected><Log /></SuperAdminProtected>} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  );
};

export default AppRoutes;
