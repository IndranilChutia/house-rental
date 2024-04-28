import {
  AdminNav,
  AdminSideBar,
  Checkbox,
  DropDown,
  InputAdmin,
  TitleAdmin,
} from "@components";
import "./adminStyles.css";
import React, { useEffect, useState } from "react";
import { ThumbnailInput } from "src/components/ThumbnailInput";
import { AdditionalImageInput } from "src/components/AdditionalImageInput";
import axios from "axios";
import useSWR from "swr";
import { jwtDecode } from "jwt-decode";

const fetcher = (...args) => fetch(...args).then(res => res.json())
const AddProperty = () => {
  // * Network Calls
  const { data: amenitiesData, error, isLoading } = useSWR(`${import.meta.env.VITE_HOST}/api/rental-app/lists`, fetcher)

  const token = localStorage.getItem("partnerToken");
  useEffect(()=>{
    const decodedToken = jwtDecode(token);
    const admintokenId = decodedToken.user.id;
    setPostData((prevData=>{
      return {
        ...prevData,
        adminId: admintokenId
      }
    }))
  },[token])

  // STATE VARIABLES
  const [page, setPage] = useState(1);
  const [productImages, setProductImages] = useState([]);
  const [isGST, setGST] = useState(true);
  const [isRented, setIsRented] = useState(false)
  const [des, setDes] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [postData, setPostData] = useState({
    adminId: "",
    thumbnail: "",
    name: "",
    propType: "shared",
    address: "",
    rent: 0,
    carpetArea: 0,
    furnishDetails: "",
    movein: true,
    bedroom: 0,
    bathroom: 0,
    parking: 0,
    leaseDuration: 0,
    maintenance: 0,
    security: 0,
    maxOccupancy: 0,
    rentedStatus: false,
    Language: "",
    amenities: [],
    gst: false,
    gstIn: "",
    sac: "",
    propertyDesc: "",
    mapLink: "",
    totalFloor: 0,
    img: [],
  });

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setCheckedItems((prevItems) => {
      const updatedItems = checked
        ? [...prevItems, value]
        : prevItems.filter((item) => item !== value);
      updateAmenity(updatedItems);
      return updatedItems;
    });
  };

  const updateAmenity = (dataList) => {
    console.log("updateAmmenity", dataList);
    setPostData((prevData) => ({
      ...prevData,
      amenities: dataList,
    }));
  };

  const handleInputChange = (name, value) => {
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(postData);
  };

  const handleTextArea = (name, value) => {
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChange = (e) => {
    setDes(e.target.value);
    handleTextArea(e.target.name, e.target.value);
  };

  const handleAdditionalImgChange = (data) => {
    setProductImages([...productImages, data]);
    setPostData((prevData) => ({
      ...prevData,
      img: [...productImages, data],
    }));
  };

  const handleDelelteAdditionalImg = (data) => {
    setProductImages([...data]);

    setPostData((prevData) => ({
      ...prevData,
      images: [...data],
    }));
  };

  const handleThumbnailChage = (data) => {
    let imgData = [...data];
    // console.log("Thumbnail: ", imgData)
    setPostData((prevData) => ({
      ...prevData,
      thumbnail: imgData,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = buildFormData(postData);
      console.log(postData)
      const res = await axios.post(`${import.meta.env.VITE_HOST}/api/rental-app/propertyInfo`, formData);
      if (res.status === 200) {
        alert("Added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buildFormData = (data) => {
    const formData = new FormData();
    for (const [key, value] of Object.entries(data)) {
      appendData(formData, key, value);
    }
    return formData;
  };

  const appendData = (formData, key, value) => {
    const isExcluded = key === "thumbnail" || key === "images";
    if (isExcluded) {
      handleExcludedData(formData, key, value);
    } else {
      handleStandardData(formData, key, value);
    }
  };

  const handleExcludedData = (formData, key, value) => {
    if (Array.isArray(value)) {
      formData.append(`${key}`, value.length === 1 ? value[0] : value);
    }
  };

  const handleStandardData = (formData, key, value) => {
    formData.append(
      key,
      Array.isArray(value)
        ? value.map((val) => (typeof val === "object" ? JSON.stringify(val) : val))
        : value
    );
  };

  const handleToggle = (e) => {
    const { checked } = e.target;
    if (checked) {
      setGST(false);
    } else {
      setGST(true);
    }
    setPostData((prevData) => ({
      ...prevData,
      gst: isGST,
    }));
  };


  // * STATIC DATA
  const propertyTypeData = [
    { label: "Shared", value: "shared" },
    { label: "Apartment", value: "apartment" },
    { label: "Independent", value: "independent" }
  ];

  const furnishingData = [
    { label: "Unfurnished", value: "unfurnished" },
    { label: "Semi Furnished", value: "semifurnished" },
    { label: "Fully Furnished", value: "fullyfurnished" }
  ];



  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }



  return (
    <div className="w-full h-screen">
      <AdminNav />
      <div className="w-full  h-full flex flex-col md:flex-row">
        <AdminSideBar />
        <div className="w-full h-screen flex flex-col px-5 md:w-4/5 md:px-10 overflow-y-scroll ">
          <TitleAdmin Title="Add a Property" />
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-black text-zinc-900">
              {page === 1 && "Enter Personal Info"}
              {page === 2 && "Enter GST Information"}
              {page === 3 && "Finalize Listing"}
            </p>
            <p className="text-base font-medium my-0">Step {page}/3</p>

            {page === 1 && (
              <div className="w-full  h-full flex flex-col gap-3 my-1">
                <InputAdmin
                  label="Enter Property Name"
                  name="name"
                  type="text"
                  onChange={(name, value) => handleInputChange(name, value)}
                />
                <div className="w-[95%] flex justify-between">
                  <div className="w-[30%]">
                    <InputAdmin
                      label="Enter Property Address"
                      name="address"
                      type="text"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                  <div className="w-[30%]">
                    <InputAdmin
                      label="Google Map Link"
                      name="mapLink"
                      type="text"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                  <div className="w-[30%]">
                    <InputAdmin
                      label="Max Occupancy"
                      name="maxOccupancy"
                      type="number"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                </div>
                <div className="w-[95%] flex justify-between">
                  <div className="w-[30%]">
                    <DropDown
                      label="Enter Property Type"
                      name="propType"
                      data={propertyTypeData}
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                  <div className="w-[30%]">
                    <InputAdmin
                      label="Enter Lease Duration"
                      name="leaseDuration"
                      type="number"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                  <div className="w-[30%]">
                    <InputAdmin
                      label="Enter Bedrooms"
                      name="bedroom"
                      type="number"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                </div>
                <div className="w-[95%] flex justify-between">
                  <div className="w-[24%]">
                    <InputAdmin
                      label="Enter Bathroom"
                      name="bathroom"
                      type="number"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                  <div className="w-[24%]">
                    <InputAdmin
                      label="Enter Carpet Area"
                      name="carpetArea"
                      type="text"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                  <div className="w-[24%]">
                    <InputAdmin
                      label="Enter Floor"
                      name="totalFloor"
                      type="number"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                  <div className="w-[24%]">
                    <InputAdmin
                      label="Enter No of Parking"
                      name="parking"
                      type="number"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                </div>
                <label htmlFor="description">Enter property description</label>
                <textarea
                  id="description "
                  name="propertyDesc"
                  value={des}
                  className="w-[95%] min-h-[200px] p-3 border border-zinc-400 rounded-md"
                  placeholder="Write few words about the property that will lucrate the property seekers. "
                  onChange={(name, value) => handleChange(name, value)}
                />
                <button
                  className="p-2 bg-gray-800 w-1/6 ml-auto mr-[5%] text-zinc-50 rounded-md"
                  onClick={() => {
                    setPage(page + 1);
                  }}
                >
                  Save and Next
                </button>
              </div>
            )}
            {page === 2 && (
              <div className="w-full h-full flex flex-col gap-3 my-1">
                <label className="inline-flex items-center cursor-pointer mb-5">
                  <input
                    type="checkbox"
                    value=""
                    className="sr-only peer"
                    onChange={handleToggle}
                  />
                  <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ms-3 text-sm font-medium text-gray-900 ">
                    Have you opted for GST
                  </span>
                </label>
                {isGST ? (
                  ""
                ) : (
                  <div className="flex flex-col gap-2 w-1/2">
                    <InputAdmin
                      label="Enter Service Account Code (S.A.C.)"
                      name="sac"
                      type="text"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                    <InputAdmin
                      label="Enter GSTIN Number"
                      name="gstIn"
                      type="text"
                      onChange={(name, value) => handleInputChange(name, value)}
                    />
                  </div>
                )}
                <div className="flex justify-center items-center gap-4">

                  <button
                    className="p-2 bg-gray-300 w-1/6 text-zinc-700 font-semibold rounded-md"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="p-2 bg-gray-800 w-1/6 mr-auto text-zinc-50 rounded-md"
                    onClick={() => {
                      setPage(page + 1);
                    }}
                  >
                    Save and Next
                  </button>
                </div>
              </div>
            )}
            {page === 3 && (
              <div className="w-full h-full flex flex-col ">
                <div className="w-full h-fit flex flex-wrap-reverse items-end ">
                  <div className="w-1/3 h-fit flex flex-col gap-2 my-2 min-w-[240px]">
                    {amenitiesData.data?.map(item => {
                      return (
                        <Checkbox key={item.id}
                          name={item.id}
                          value={item.id}
                          label={item.name}
                          onChange={handleCheckbox}
                        />
                      )
                    })}

                  </div>
                  <div className="w-1/3 h-fit flex flex-col gap-2 my-2 min-w-[240px]">
                    <p className="text-xl font-bold">Furnish Details</p>
                    <fieldset className="w-full text-lg">
                      {/*yha tha me*/}
                      {furnishingData.map(item => (
                        <div key={item.value} className="flex gap-2 my-2">
                          <input
                            className="cursor-pointer"
                            type="radio"
                            name="furnishDetails"
                            id={item.value}
                            value={item.value}
                            onChange={(e) => handleInputChange("furnishDetails", e.target.value)}
                          />
                          <label className="cursor-pointer" htmlFor={item.value}>
                            {item.label}
                          </label>
                        </div>
                      ))}

                    </fieldset>
                    <div className="my-1 w-3/4">
                      <InputAdmin
                        name="rent"
                        label="Property Rent (INR)"
                        type="number"
                        onChange={(name, value) => handleInputChange(name, value)}
                      />
                    </div>
                    <div className="my-1 w-3/4">
                      <InputAdmin
                        name="security"
                        label="Property Security (INR)"
                        type="number"
                        onChange={(name, value) => handleInputChange(name, value)}
                      />
                    </div>
                    <div className="my-1 w-3/4">
                      <InputAdmin
                        name="maintenance"
                        label="Property Maintenance (INR)"
                        type="number"
                        onChange={(name, value) => handleInputChange(name, value)}
                      />
                    </div>
                  </div>
                  <div className="w-1/3 h-fit flex flex-col gap-2 mt-2 p-2 justify-start min-w-[240px]">
                    <div className="addProductCont3 ">
                      <h4 className="font-semibold mb-4">
                        Property Thumbnail Image
                      </h4>
                      <ThumbnailInput
                        onImageUpload={(e) => {
                          handleThumbnailChage(e);
                        }}
                      />
                      <p className="text-right text-sm font-medium text-gray-600">
                        Attach Additional Images ({productImages.length}/5)
                      </p>
                      <div className="additionalImagesCont flex flex-wrap mt-3 ">
                        <AdditionalImageInput
                          productImages={productImages}
                          setProductImages={setProductImages}
                          onImageChange={(e) => {
                            handleAdditionalImgChange(e);
                          }}
                          handleDelelteAdditionalImg={(e) => {
                            handleDelelteAdditionalImg(e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <button
                    className="p-2 bg-gray-300 w-1/6  text-zinc-700 font-semibold rounded-md"
                    onClick={() => {
                      setPage(page - 1);
                    }}
                  >
                    Back
                  </button>
                  <button
                    className="p-2 bg-gray-800 w-1/6 ml-auto mr-[5%] text-zinc-50 rounded-md"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;
