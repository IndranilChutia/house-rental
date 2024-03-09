import {
  AdminNav,
  AdminSideBar,
  Checkbox,
  DropDown,
  InputAdmin,
  TitleAdmin,
} from "@components";
import "./adminStyles.css";
import React, { useState } from "react";
import { ThumbnailInput } from "src/components/ThumbnailInput";
import { AdditionalImageInput } from "src/components/AdditionalImageInput";

const AddProperty = () => {
  const [page, setPage] = useState(1);
  const [productImages, setProductImages] = useState([]);
  const [isGST, setGST] = useState(true);
  const [des, setDes] = useState("");
  const [checkedItems, setCheckedItems] = useState([]);
  const [postData, setPostData] = useState({
    id: 1,
    thumbnail: "",
    name: "",
    type: "",
    location: "",
    rent: 0,
    area: 0,
    furnishing: "",
    movein: "",
    bedroom: 0,
    bathroom: 0,
    parking: 0,
    lease: 0,
    maintenance: "",
    security: "",
    occupancy: 0,
    status: "",
    Language: "",
    ammenities: [],
    GST: false,
    GSTIN: "",
    SAC: "",
    description: "",
    gmap: "",
    floor: "",
    images: [],
  });

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setCheckedItems((prevItems) => {
      const updatedItems = checked
        ? [...prevItems, value]
        : prevItems.filter((item) => item !== value);
      return updatedItems;
    });
    updateAmmenity(checkedItems);
  };

  const updateAmmenity = (dataList) => {
    console.log("updateAmmenity", dataList);
    setPostData((prevData) => ({
      ...prevData,
      ammenities: dataList,
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
      images: [...productImages, data],
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

      let formData = new FormData();

      for (let [key, value] of Object.entries(postData)) {
        if (key !== "thumbnail" && key !== "images") {
          console.log("VALUE", { key }, { value });
          if (Array.isArray(value)) {
            if (value.length === 1) {
              console.log(key === "variants");
              formData.append(
                `${key}[]`,
                key === "ammenities" ? JSON.stringify(value[0]) : value[0]
              );
            } else {
              for (let val of value) {
                // typeof (val) === "object" ? console.log("++++++++", JSON.stringify(val)) : console.log("++++++++++++")
                formData.append(
                  key,
                  typeof val === "object" ? JSON.stringify(val) : val
                );
              }
            }
          } else {
            formData.append(key, value);
          }
        } else {
          if (Array.isArray(value)) {
            if (value.length === 1) {
              formData.append(`${key}`, value[0]);
            } else {
              for (let val of value) {
                formData.append(key, val);
              }
            }
          }
        }
      }

      alert("Added");
    } catch (error) {
      console.log(error);
    } finally {
    }
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
      GST: isGST,
    }));
  };

  const typeData = ["Shared", "Apartment", "Private Room", "Private House"];
  return (
    <div className="w-full h-[100vh] md:overflow-hidden">
      <AdminNav />
      <div className="w-full min-h-[90vh] h-full flex flex-col md:flex-row md:h-[92vh]">
        <AdminSideBar />
        <div className="w-full h-full flex flex-col gap-5 px-5 md:w-4/5 md:px-10 overflow-y-scroll ">
          <TitleAdmin Title="Add a Property" />
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
                    name="location"
                    type="text"
                    onChange={(name, value) => handleInputChange(name, value)}
                  />
                </div>
                <div className="w-[30%]">
                  <InputAdmin
                    label="Google Map Link"
                    name="gmap"
                    type="text"
                    onChange={(name, value) => handleInputChange(name, value)}
                  />
                </div>
                <div className="w-[30%]">
                  <InputAdmin
                    label="Max Occupancy"
                    name="occupancy"
                    type="number"
                    onChange={(name, value) => handleInputChange(name, value)}
                  />
                </div>
              </div>
              <div className="w-[95%] flex justify-between">
                <div className="w-[30%]">
                  <DropDown
                    label="Enter Property Type"
                    name="type"
                    data={typeData}
                    onChange={(name, value) => handleInputChange(name, value)}
                  />
                </div>
                <div className="w-[30%]">
                  <InputAdmin
                    label="Enter Lease Duration"
                    name="lease"
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
                    name="area"
                    type="text"
                    onChange={(name, value) => handleInputChange(name, value)}
                  />
                </div>
                <div className="w-[24%]">
                  <InputAdmin
                    label="Enter Floor"
                    name="floor"
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
                name="description"
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
                    name="SAC"
                    type="text"
                    onChange={(name, value) => handleInputChange(name, value)}
                  />
                  <InputAdmin
                    label="Enter GSTIN Number"
                    name="GSTIN"
                    type="text"
                    onChange={(name, value) => handleInputChange(name, value)}
                  />
                </div>
              )}
              <button
                className="p-2 bg-gray-800 w-1/6 mr-auto text-zinc-50 rounded-md"
                onClick={() => {
                  setPage(page + 1);
                }}
              >
                Save and Next
              </button>
            </div>
          )}
          {page === 3 && (
            <div className="w-full h-full flex flex-col ">
              <div className="w-full h-fit flex flex-wrap-reverse items-end ">
                <div className="w-1/3 h-fit flex flex-col gap-2 my-2 min-w-[240px]">
                  <Checkbox
                    name="MoveIn"
                    label="Ready To Move In"
                    onChange={handleCheckbox}
                  />
                  <Checkbox
                    name="maintanance"
                    label="Maintenance"
                    onChange={handleCheckbox}
                  />
                  <Checkbox
                    name="Nearby"
                    label="Nearby Hospital and Mall"
                    onChange={handleCheckbox}
                  />
                  <Checkbox
                    name="security"
                    label="Security Deposit"
                    onChange={handleCheckbox}
                  />
                  <Checkbox
                    name="HouseTour"
                    label="House Tour Available"
                    onChange={handleCheckbox}
                  />
                  <Checkbox
                    name="PetFriendly"
                    label="Pet Friendly"
                    onChange={handleCheckbox}
                  />
                  <Checkbox
                    name="Grocery"
                    label="Nearby Groceries"
                    onChange={handleCheckbox}
                  />
                  <Checkbox
                    name="MainRoad"
                    label="Main Road Connection"
                    onChange={handleCheckbox}
                  />
                </div>
                <div className="w-1/3 h-fit flex flex-col gap-2 my-2 min-w-[240px]">
                  <p className="text-xl font-bold">Furnish Details</p>
                  <div className="w-full text-lg">
                    {/*yha tha me*/}
                    <div className="flex gap-2 my-2">
                      <input type="radio" name="furnish" id="furnish" />
                      <label htmlFor="furnish">Fully Furnished</label>
                    </div>
                    <div className="flex gap-2 my-2">
                      <input type="radio" name="furnish" id="semifurnish" />
                      <label htmlFor="semifurnish">Semi Furnished</label>
                    </div>
                    <div className="flex gap-2 my-2">
                      <input type="radio" name="furnish" id="raw" />
                      <label htmlFor="raw">Raw Condition</label>
                    </div>
                  </div>
                  <div className="my-4 w-3/4">
                    <InputAdmin
                      name="rent"
                      label="Property rent"
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
                      Attach Additional Images ({productImages.length}/10)
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
                  className="p-2 bg-gray-300 w-1/6  text-zinc-500 rounded-md"
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
  );
};

export default AddProperty;
