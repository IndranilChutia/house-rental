// Imported Components from the components folder
import { Button, Navbar, FullSearch, FeaturedSection, VerticalCard, Footer } from '@components';
import { Link } from 'react-router-dom';
import heroImg from "@images/hero.png"
import chooseUs from "@images/choose-us.png"

// Icons
import { IoMdPin } from "react-icons/io";
import { HiCalendar, HiMiniHome } from "react-icons/hi2";
import { FaTags } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";






const LandingPage = () => {

    const services = [
        {
            icon: <IoMdPin />,
            title: 'Choose Location',
            description: 'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.'
        },
        {
            icon: <HiCalendar />,
            title: 'Pick a Date',
            description: 'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.'
        },
        {
            icon: <HiMiniHome />,
            title: 'Rent a Home',
            description: 'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.'
        },
    ]

    const whyCooseUs = [
        {
            icon: <FaTags />,
            title: 'Best Price!',
            description: 'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.'
        },
        {
            icon: <RiCustomerService2Fill />,
            title: 'Customer Support',
            description: 'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.'
        },
        {
            icon: <IoMdPin />,
            title: 'Multiple Locations',
            description: 'Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices, orci vitae convallis mattis.'
        }
    ]

    return (
        <>
            <Navbar />

            {/* HERO SECTION */}
            <div className="flex flex-col items-center overflow-hidden">
                <div className="container">
                    <div className="py-[10%] overflow-y-hidden md:w-screen flex relative -mt-6">
                        <div className="w-full flex flex-1 flex-col md:justify-center ">
                            <h1 className="text-5xl md:text-7xl leading-snug font-semibold md:font-normal lg:text-8xl lg:leading-tight">
                                Find Perfect Rental Homes in No Time
                            </h1>
                            <p className="md:max-w-96 flex flex-wrap leading-normal mt-2">We are the best rental home service that promises to shift you into your new home on the same day.</p>
                            <span className="mt-8">

                                <Button
                                    onClick={() => { console.log('clicked') }}
                                    size='lg'
                                    shape='round'
                                >
                                    See How it Works!

                                </Button>
                            </span>
                        </div>
                        <div className="flex-1">
                            <img src={heroImg} alt="hero" className="hidden md:block absolute -z-10 -bottom-6 right-0 h-1/2 md:h-fit md:w-3/5" />
                        </div>
                    </div>

                    {/* SEARCH SECTION */}
                    <div className='h-[90%] mb-16 w-full -mt-8'>
                        <FullSearch />
                    </div>


                </div>

                {/* HOW IT WORKS */}
                <div id='services' className='h-full w-screen bg-white flex flex-col items-center py-24'>
                    <h1 className='text-5xl font-semibold mb-4'>How it Works</h1>
                    <p className='text-slate-500 w-5/12 text-wrap text-center leading-relaxed'>
                        Navigate Your Way Home: Explore, Rent, and Experience Comfort on Our Intuitive House Rental Platform!
                    </p>
                    <div className='mt-20 flex gap-28 justify-center flex-wrap'>
                        {services.map((service, index) => {
                            return (
                                <div key={index} className='flex flex-col max-w-72 items-center gap-y-4 gap-x-2'>
                                    <div className='bg-gray-100 p-4 text-3xl rounded-xl'>{service.icon}</div>
                                    <h2 className='text-2xl font-semibold'>{service.title}</h2>
                                    <p className='text-center text-slate-600 leading-relaxed text-sm'>{service.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>


                {/* FEATURED SECTION */}
                <div className='container my-24'>
                    <div className='w-full'>
                        <h1 className='text-4xl font-semibold'>
                            Discover our featured rentals
                        </h1>
                        <div className='my-16'>
                            <FeaturedSection />
                        </div>
                        <div className='flex justify-center'>
                            <Link to={'/properties'}><Button>See More Properties</Button></Link>
                        </div>

                    </div>
                </div>


                {/* Why Choose Us? */}
                <div className='h-full w-screen bg-white flex flex-col items-center py-24'>
                    <div className='container flex flex-col items-center'>

                        <h1 className='text-5xl font-semibold mb-4'>Why Choose Us?</h1>
                        <p className='text-slate-500 w-5/12 text-wrap text-center leading-relaxed'>
                            Navigate Your Way Home: Explore, Rent, and Experience Comfort on Our Intuitive House Rental Platform!
                        </p>

                        <div className='w-full mt-16 flex sm:flex-col md:flex-row'>
                            <div className='hidden md:block flex-1 p-10'><img src={chooseUs} alt='choose-us' /></div>
                            <div className='flex-1 p-10 flex flex-col justify-center gap-16'>
                                {whyCooseUs.map((service, index) => {
                                    return (
                                        <div key={index} className='flex items-start gap-6'>
                                            <div className='bg-gray-100 p-4 text-3xl rounded-xl'>{service.icon}</div>
                                            <div>
                                                <h2 className='text-2xl font-semibold mb-2'>{service.title}</h2>
                                                <p className='text-slate-600 leading-relaxed text-sm'>{service.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                                }

                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    );
};

export default LandingPage;