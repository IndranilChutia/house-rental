import {
  AdminNav,
  AdminSideBar,
  DropDown,
  ImagePlainInput,
  InputAdmin,
  TitleAdmin,
} from "@components";
import React from "react";

const PersonalDetailAdmin = () => {
  const idChoice = ["Adhar Card", "Pan Card", "Passport"];
  return (
    <div className="w-full h-[100vh] md:overflow-hidden">
      <AdminNav />
      <div className="w-full min-h-[90vh] h-full flex flex-col md:flex-row md:h-[92vh]">
        <AdminSideBar />
        <div className="w-full h-full flex flex-col gap-5 px-5 md:w-4/5 md:px-10">
          <TitleAdmin Title="Enter Personal Info" />
          <p>
            Your Personal information is necessary for us to know so that we can
            help you get better connects for your property listing
          </p>
          <form className="w-full h-full flex flex-col gap-3 my-1">
            <InputAdmin label="Enter Name" name="name" type="text" />
            <div className="w-[95%] flex justify-between gap-0">
              <div className="w-[45%]">
                <InputAdmin
                  label="Enter Mobile Number"
                  name="mobile"
                  type="number"
                />{" "}
              </div>
              <div className="w-[45%]">
                <InputAdmin
                  label="Enter Email Address"
                  name="email"
                  type="email"
                />{" "}
              </div>
            </div>
            <div className="w-[95%] flex justify-between">
              <div className="w-[30%]">
                <DropDown
                  name="idchoice"
                  label="Choose ID type"
                  data={idChoice}
                />
              </div>
              <div className="w-[30%]">
                <InputAdmin label="Enter ID Number" name="GovID" type="text" />
              </div>
              <div className="w-[30%]">
                <ImagePlainInput />
              </div>
            </div>
            <label htmlFor="short-bio">Enter a Short bio</label>
            <textarea
              id="short-bio "
              className="w-[95%] min-h-[200px] p-3 border border-zinc-400 rounded-md"
              placeholder="Enter a short bio about you as a owner/dealer/person. "
            />
            <button className="p-2 bg-gray-800 w-1/6 ml-auto mr-[5%] text-zinc-50 rounded-md">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetailAdmin;
