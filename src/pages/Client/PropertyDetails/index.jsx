import { useEffect, useMemo, useRef, useState } from "react";
import Slider from "react-slick/lib/slider";
import { useParams } from "react-router-dom";
import useSWR from 'swr';
import _ from 'lodash'
import toast from "react-hot-toast";
import Payment from '../../../services/Payment'


import {
  CustomNextArrow,
  CustomPrevArrow,
  Footer,
  Navbar,
} from "@components";
import noImg from '../../../assets/images/noImg.png'
import { generateImgLink } from '../../../utils/generateImgLink';

// Images
import headerImg from "@images/Header.png";



// Icons
import { IoAlarmOutline, IoBedOutline, IoBusinessOutline, IoCarOutline, IoCashOutline, IoKeyOutline } from "react-icons/io5";
import {
  PiBathtub,
  PiIntersectSquareDuotone,
  PiArmchair,
  PiStairs,
} from "react-icons/pi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useAuth } from "@clerk/clerk-react";

const ownerImg =
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



const fetcher = (...args) => fetch(...args).then(res => res.json())
const PropertyDetails = () => {

  let { propertyId } = useParams()
  // console.log(propertyId)

  const { userId } = useAuth();
  console.log(userId)

  const payment = new Payment()


  // * API Calls

  // ? Fetch Properties
  const { data, error, isLoading } = useSWR(`${import.meta.env.VITE_HOST}/api/rental-app/propertyInfo?id=${propertyId}`, fetcher)
  const propertyDetail = useMemo(() => data?.data || [], [data]);

  console.log(propertyDetail)


  // ? Razorpay Object
  const payRent = async (_propertyId) => {
    try {
      let order = await payment.createOrder(userId, _propertyId);
      console.log(order)
      if (order?.statusCode && order.statusCode == "200") {
        let options = {
          ...order.data,
          handler: async function (response) {
            console.log(response.razorpay_payment_id)
            let order = await payment.validatePayment(userId, response);
            console.log(order)
            if (order?.statusCode && order.statusCode == "200") {
              alert("Payment has been successfully done! Please Reload");
              toast.success((t) => (
                setTimeout(() => {
                  toast.dismiss(t.id)
                  window.location.reload()

                }, 4000),
                <span>
                  Payment Successful! 🎉 Reloading...
                </span>
              ),
                { duration: 4000 });
            } else if (
              order?.statusCode &&
              order.statusCode == "203"
            ) {
              alert(order?.error);
            }
          },
        };
        var razorpayObject = new Razorpay(options);
        console.log("=======", options)
        razorpayObject.on("payment.failed", function (response) { });
        razorpayObject.open();
      } else if (order?.statusCode && order.statusCode == "203") {
        alert(order?.error);
      }
    } catch (error) {
      alert(error);
    }
  }






  // Utility Functions

  const propertyImages = propertyDetail?.img?.map((item, index) => ({
    id: index + 1,
    src: generateImgLink(item.path)
  })) || [];

  propertyImages.unshift({
    id: 0,
    src: generateImgLink(propertyDetail?.thumbnail?.path)
  })

  // If propertyImages has less than 4 items, repeat the elements to have at least 4 elements
  while (propertyImages.length < 4) {
    propertyImages.push({
      id: Math.random(),
      src: noImg
    })
  }

  // Carousel Settings
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
  }, [propertyDetail]);






  if (isLoading) {
    return <div>Loading....</div>
  }

  if (error) {
    return <div>{error}</div>
  }



  return (
    <div className="w-full flex flex-col items-center">
      <Navbar />
      <div className="w-full h-full flex justify-center relative">
        <img
          src={headerImg}
          alt="header"
          className="absolute -z-10 h-full w-full"
        />
        <h1 className="text-4xl py-[6%] text-white font-bold">{propertyDetail.name}</h1>
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
                  {propertyDetail.bedroom} Bedrooms
                </div>
                <div className="flex items-center">
                  <PiBathtub className="text-lg mr-3" />
                  {propertyDetail.bathroom} Bathrooms
                </div>
                <div className="flex items-center">
                  <PiIntersectSquareDuotone className="text-lg mr-3" />
                  {propertyDetail.carpetArea} sq.ft
                </div>
                <div className="flex items-center">
                  <PiArmchair className="text-lg mr-3" />
                  {_.capitalize(propertyDetail.furnishDetails)}
                </div>
                <div className="flex items-center">
                  <IoBusinessOutline className="text-lg mr-3" />
                  {_.capitalize(propertyDetail.propType)}
                </div>
                <div className="flex items-center">
                  <IoKeyOutline className="text-lg mr-3" />
                  Move-In {propertyDetail.movein ? "Available" : "Not Available"}
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
                  <button onClick={(e) => payRent(propertyId)} className="px-2 py-1 border-2 border-slate-600 rounded-full text-sm hover:bg-slate-100 transition-all">
                    Pay Rent Now!
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <p>Rent</p>
                <div>
                  <span className="text-3xl font-openSans text-slate-800 font-bold">
                    ₹{propertyDetail.rent}
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
                {propertyImages.map((image) => (
                  <div key={image.id} className="h-96 rounded-md overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={image.src}
                      alt="additional-img"
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
                {propertyImages.map((image) => (
                  <div
                    key={image.id}
                    className="h-24 w-24 rounded-md cursor-pointer overflow-hidden"
                  >
                    <img
                      className="w-full h-full object-cover mx-2 rounded-md"
                      src={image.src}
                      alt="additional-img"
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 -mx-10 p-4 rounded-lg">
          <div className="mx-10 py-8">
            <h1 className="text-xl font-semibold mb-7">Property Details</h1>
            <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
              <div className="flex items-center">
                <IoCashOutline className="text-lg mr-3" />
                Security: ₹{propertyDetail.security}
              </div>
              <div className="flex items-center">
                <IoCashOutline className="text-lg mr-3" />
                Maintenance: ₹{propertyDetail.maintenance}
              </div>
              <div className="flex items-center">
                <IoBedOutline className="text-lg mr-3" />
                {propertyDetail.bedroom} Bedrooms
              </div>
              <div className="flex items-center">
                <PiBathtub className="text-lg mr-3" />
                {propertyDetail.bathroom} Bathrooms
              </div>
              <div className="flex items-center">
                <PiIntersectSquareDuotone className="text-lg mr-3" />
                {propertyDetail.carpetArea} sq.ft Area
              </div>
              <div className="flex items-center">
                <IoAlarmOutline className="text-lg mr-3" />
                {propertyDetail.leaseDuration} Months Lease
              </div>
              <div className="flex items-center">
                <IoCarOutline className="text-lg mr-3" />
                Parking: {propertyDetail.parking}
              </div>
              <div className="flex items-center">
                <PiStairs className="text-lg mr-3" />
                Floor Number: {propertyDetail.parking}
              </div>

            </div>
            <h1 className="text-xl font-semibold mt-12 mb-7">Amenities</h1>
            <div className="grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {propertyDetail.amenities.map(item => {
                return (
                  <div key={item.id} className="flex items-center gap-2">
                    <IoMdCheckmarkCircleOutline className="w-5 h-5" />
                    <h3>{_.capitalize(item.lists.name)}</h3>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 my-16">
          <div>
            <h3 className="text-xl w-full my-4 text-center font-semibold">
              Owner&apos;s Note
            </h3>
            <p className="px-4 lg:px-20">
              {propertyDetail.propertyDesc}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetails;
