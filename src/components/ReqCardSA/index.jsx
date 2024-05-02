import React, { useState } from "react";
import bed from "../../assets/images/Admin/bed.png";
import bath from "../../assets/images/Admin/bath.png";
import clock from "../../assets/images/Admin/clock.png";
import calender from "../../assets/images/Admin/calender.png";
import people from "../../assets/images/Admin/people.png";
import parking from "../../assets/images/Admin/parking.png";
import duration from "../../assets/images/Admin/duation.png";
import maintanance from "../../assets/images/Admin/mntnce.png";
import language from "../../assets/images/Admin/language.png";
import security from "../../assets/images/Admin/security.png";
import { Link } from "react-router-dom";
import { generateImgLink } from '../../utils/generateImgLink';
import axios from "axios";
import toast from "react-hot-toast";

const ReqCardSA = (props) => {
  const onDelete = () => {
    //handle onDelete
  };

  console.log(props.id)
  const handlePropertyApprove = async () => {
    try {
      const res = await axios.put(`${import.meta.env.VITE_HOST}/api/rental-app/approveProperty?id=${props.id}`)

      toast.success("Property Approved");
      window.location.reload()

    } catch (error) {
      console.log(error)
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="w-full py-2 h-[300px] flex gap-5">
      <img
        src={generateImgLink(props.img?.path)}
        alt="property"
        className="h-full object-cover w-[350px] rounded-lg shadow-md"
      />
      <div className="w-full h-full">
        <div className="w-[90%] h-full flex flex-col gap-2">
          <div className="flex w-full h-1/5 gap-4 items-center justify-start">
            <h1 className="font-black text-3xl ">{props.name}</h1>
            <p className="flex items-center h-full gap-1 text-sm text-zinc-400">
              {" "}
              <span className="h-full flex items-center">
                <img className="h-[50%] object-contain" src={bed} alt="" />
              </span>
              {`${props.bed} BedRoom`}
            </p>
            <p className="flex items-center h-full gap-1 text-sm text-zinc-400">
              {" "}
              <span className="h-full flex items-center">
                <img className="h-[50%] object-contain" src={bath} alt="" />
              </span>
              {`${props.bath} Bathroom`}
            </p>
          </div>
          <div className="flex w-full h-4/5 gap-3">
            <div className="w-3/4 h-[90%] flex flex-col flex-wrap">
              <p className="w-[45%] m-1 h-1/5 flex items-center gap-2">
                <span className="flex w-fit h-full gap-1 items-center">
                  <img src={clock} alt="" className="h-1/2 object-contain" />
                  <p className="font-bold">Posted On:</p>
                </span>
                {`${props.date}`}
              </p>
              <p className="w-[45%] m-1 h-1/5 flex items-center gap-2">
                <span className="flex w-fit h-full gap-1 items-center">
                  <img src={calender} alt="" className="h-1/2 object-contain" />
                  <p className="font-bold">Move In:</p>
                </span>
                {`${props.moveIn}`}
              </p>
              <p className="w-[45%] m-1 h-1/5 flex items-center gap-2">
                <span className="flex w-fit h-full gap-1 items-center">
                  <img src={people} alt="" className="h-1/2 object-contain" />
                  <p className="font-bold">Occupancy:</p>
                </span>
                {` ${props.occupancy} People`}
              </p>
              <p className="w-[45%] m-1 h-1/5 flex items-center gap-2">
                <span className="flex w-fit h-full gap-1 items-center">
                  <img src={parking} alt="" className="h-1/2 object-contain" />
                  <p className="font-bold">Parking:</p>
                </span>
                {`${props.parking} Vehicle`}
              </p>
              <p className="w-[45%] m-1 h-1/5 flex items-center gap-2">
                <span className="flex w-fit h-full gap-1 items-center">
                  <img src={duration} alt="" className="h-1/2 object-contain" />
                  <p className="font-bold">Lease for:</p>
                </span>
                {`${props.leaseFor} Months `}
              </p>
              <p className="w-[45%] m-1 h-1/5 flex items-center gap-2">
                <span className="flex w-fit h-full gap-1 items-center">
                  <img
                    src={maintanance}
                    alt=""
                    className="h-1/2 object-contain"
                  />
                  <p className="font-bold">Maintanance:</p>
                </span>
                {props.maintanance}
              </p>
              <p className="w-[45%] m-1 h-1/5 flex items-center gap-2">
                <span className="flex w-fit h-full gap-1 items-center">
                  <img src={language} alt="" className="h-1/2 object-contain" />
                  <p className="font-bold">Language:</p>
                </span>
                {props.language}
              </p>
              <p className="w-[45%] m-1 h-1/5 flex items-center gap-2">
                <span className="flex w-fit h-full gap-1 items-center">
                  <img src={security} alt="" className="h-1/2 object-contain" />
                  <p className="font-bold">Security:</p>
                </span>
                {props.security}
              </p>
            </div>
            <div className="w-1/4 h-full flex flex-col py-3 gap-3 items-end">
              <p className="text-sm text-zinc-400 font-bold">
                from{" "}
                <span className="text-xl text-zinc-500 font-black">
                  {`Rs.${props.price}/m`}
                </span>
              </p>
              <button
                className="py-3 px-5 rounded-full bg-zinc-100 text-zinc-900 border border-zinc-900"
                onClick={handlePropertyApprove}
              >
                Approve
              </button>
              <button
                className="py-3 px-5 rounded-full bg-zinc-50 text-red-600 border border-red-600"
                onClick={onDelete}
              >
                Reject
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ReqCardSA };
