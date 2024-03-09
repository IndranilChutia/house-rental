import { SignInButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import React from "react";
import profile from "../../assets/images/Admin/profile.png";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";
const AdminNav = () => {
  return (
    <div className=" w-full  h-20  flex justify-center">
      <div className="flex justify-between px-5 bg-zinc-900 py-4 w-full sm:px-20">
        <div className="h-full flex items-center gap-16 ">
          <Link to={"/"} className="h-full">
            <img className="h-full" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center">
          <SignedIn>
            <div className="flex h-full my-1 rounded-full gap-3 items-center">
              <img src={profile} alt="" className="my-1 rounded-full h-full" />
              <p className="text-zinc-50 hidden sm:flex">Hello World</p>
            </div>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export { AdminNav };
