import React, { useEffect, useState } from "react";
import useSWR from 'swr';
import {
  AdminNav,
  AdminSideBar,
  AlertAdmin,
  TitleAdmin,
  XCard,
} from "@components";
import { useRecoilState } from "recoil";
import { partnerState } from "src/store/atoms/partnerState";
import { jwtDecode } from "jwt-decode";

const fetcher = (...args) => fetch(...args).then(res => res.json())
const ListingPage = () => {
  const [partnerData, setPartnerData] = useRecoilState(partnerState)

  const token = localStorage.getItem("partnerToken");
  useEffect(()=>{
    const decodedToken = jwtDecode(token);
    const admintokenId = decodedToken.user.id;
    console.log(decodedToken)
    setPartnerData({
        partnerToken: token,
        partnerId: admintokenId
      })
  },[token])

  console.log(partnerData)
  const { data: cardData, error, isLoading } = useSWR(`${import.meta.env.VITE_HOST}/api/rental-app/adminPropertyInfo?adminId=${partnerData?.partnerId}`, fetcher)

  console.log(cardData?.data)

  if(isLoading){
    return <div>Loading....</div>
  }

  if(error){
    return <div>{error}</div>
  }

  return (
    <div className="w-full h-[100vh] md:overflow-hidden">
      <AdminNav />
      <div className="w-full min-h-[90vh] h-full flex flex-col md:flex-row md:h-[92vh]">
        <AdminSideBar />
        <div className="w-full h-full flex flex-col gap-5 px-5 md:w-4/5 md:px-10">
          <TitleAdmin Title="Listings" />
          <AlertAdmin />
          <div className="w-full h-[700px] py-2 flex flex-col gap-4 overflow-y-auto ">
            {cardData.data.map((item, index) => {
              return (
                <XCard
                  key={item.id}
                  name={item.name}
                  bed={item.bedroom}
                  bath={item.bathroom}
                  thumbnail={item.thumbnail}
                  date={"12 May 2023"}
                  moveIn={item.movein}
                  occupancy={item.occupancy}
                  leaseFor={item.lease}
                  maintanance={item.maintenance}
                  language={item.Language}
                  security={item.security}
                  price={item.rent}
                  parking={item.parking}
                  status={item.status}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
