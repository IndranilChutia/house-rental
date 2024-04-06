import {
  Button,
  CustomNextArrow,
  CustomPrevArrow,
  Footer,
  Navbar,
} from "@components";
import { useEffect, useRef, useState } from "react";
import headerImg from "@images/Header.png";

import data from "../../../static/cardData.json";
console.log(data);

import { IoBedOutline } from "react-icons/io5";
import {
  PiCarLight,
  PiBathtub,
  PiIntersectSquareDuotone,
  PiArmchair,
} from "react-icons/pi";

const ownerImg =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

import searchDemo from "../../../static/searchDemo.json";
import Slider from "react-slick/lib/slider";

const PropertyDetails = () => {
  const [properties, setProperties] = useState([]);
  const [CardData, setData] = useState();

  useEffect(() => {
    setProperties(searchDemo);
    setData(data);
  }, []);

  const amenities = {
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    furnishing: "Fully Furnished",
    rent: 15000,
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="w-full h-full flex justify-center relative">
        <img
          src={headerImg}
          alt="header"
          className="absolute -z-10 h-full w-full"
        />
        <h1 className="text-4xl py-[6%] text-white font-bold">2BHK + Garage</h1>
      </div>
      <div className="container">
        <div className="w-full h-full flex flex-col gap-10 lg:grid lg:grid-cols-2 py-20">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2.5">
              <p className="text-xs md:text-sm font-medium text-yellow-500 tracking-wider">
                Ready To Move In?
              </p>
              <h1 className="text-lg md:text-xl lg:text-3xl font-semibold">
                Let&apos;s Tour And See Our House!
              </h1>
              <p className="text-xs md:text-sm text-slate-500 max-w-96">
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </p>
            </div>

            <div className="h-full flex flex-col">
              <h3 className="font-medium">House Details:</h3>
              <div className="w-full h-full grid grid-cols-2 gap-4 text-sm mt-6">
                <div className="flex items-center">
                  <IoBedOutline className="text-lg mr-3" />
                  {amenities.bedrooms} Bedrooms
                </div>
                <div className="flex items-center">
                  <PiBathtub className="text-lg mr-3" />
                  {amenities.bathrooms} Bathrooms
                </div>
                <div className="flex items-center">
                  <PiIntersectSquareDuotone className="text-lg mr-3" />
                  {amenities.area} sq.ft
                </div>
                <div className="flex items-center">
                  <PiArmchair className="text-lg mr-3" />
                  {amenities.furnishing}
                </div>
              </div>
            </div>

            <hr className="max-w-md" />

            <div className="h-full grid grid-cols-2">
              <div className="flex gap-4">
                <div className="h-16 w-16 rounded-full bg-slate-600 overflow-hidden">
                  <img src={ownerImg} alt="owner" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-semibold">John Doe</h3>
                  <button className="px-2 py-1 border-2 border-slate-600 rounded-full text-sm hover:bg-slate-100 transition-all">
                    Contact Owner
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <p>Rent</p>
                <div>
                  <span className="text-3xl font-openSans text-slate-800 font-bold">
                    ₹{amenities.rent}
                  </span>
                  <span> &nbsp;/ month</span>
                </div>
              </div>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <div className="slider-container">
              <Slider
                asNavFor={nav2}
                ref={(slider) => (sliderRef1 = slider)}
                {...settings}
              >
                {data[0]?.images.map((image, index) => (
                  <div key={index} className="h-96 rounded-md overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt="image"
                    />
                  </div>
                ))}
              </Slider>
              <Slider
                asNavFor={nav1}
                ref={(slider) => (sliderRef2 = slider)}
                slidesToShow={4}
                swipeToSlide={true}
                focusOnSelect={true}
                className="-ml-2 mt-4"
              >
                {data[0]?.images.map((image, index) => (
                  <div
                    key={index}
                    className="h-24 w-24 rounded-md cursor-pointer overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover mx-2 rounded-md"
                      src={image}
                      alt="image"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 -mx-10 rounded-lg">
          <div className="mx-10 py-8">
            <h1 className="text-xl font-semibold mb-7">Property Details</h1>
            <div className="grid  grid-cols-4 gap-10">
              <div className="flex items-center">
                <IoBedOutline className="text-lg mr-3" />
                {amenities.bedrooms} Bedrooms
              </div>
              <div className="flex items-center">
                <PiBathtub className="text-lg mr-3" />
                {amenities.bathrooms} Bathrooms
              </div>
              <div className="flex items-center">
                <PiIntersectSquareDuotone className="text-lg mr-3" />
                {amenities.area} sq.ft
              </div>
              <div className="flex items-center">
                <PiArmchair className="text-lg mr-3" />
                {amenities.furnishing}
              </div>
              <div className="flex items-center">
                <PiArmchair className="text-lg mr-3" />
                {amenities.furnishing}
              </div>
              <div className="flex items-center">
                <PiArmchair className="text-lg mr-3" />
                {amenities.furnishing}
              </div>
              <div className="flex items-center">
                <PiArmchair className="text-lg mr-3" />
                {amenities.furnishing}
              </div>
              <div className="flex items-center">
                <PiArmchair className="text-lg mr-3" />
                {amenities.furnishing}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 my-16">
          <div>
            <h3 className="text-xl w-full text-center font-semibold">
              Owner&apos;s Note
            </h3>
            <p className=" px-32">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              repellendus aliquid, vero aut fugiat dolorem laboriosam mollitia
              iure reiciendis, accusamus ullam ipsum quaerat veritatis rem atque
              minus facere architecto accusantium? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Perferendis, similique et
              consequuntur voluptatem, modi deserunt fuga, adipisci amet nisi
              maiores dignissimos nulla aliquid quaerat? Ipsam dolore hic odio
              recusandae distinctio. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Atque adipisci tempora illo, dolorem facere
              cumque consequuntur nulla quo vero ducimus unde cupiditate quasi
              delectus impedit esse voluptatibus at ex? Expedita!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
