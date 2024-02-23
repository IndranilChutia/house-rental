// Imported Components from the components folder
import { Button, Navbar, FullSearch } from '@components';
import heroImg from "@images/hero.png"



const LandingPage = () => {



    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center overflow-hidden">
                <div className="container">
                    <div className="min-h-screen md:w-screen overflow-y-hidden flex relative -mt-8">
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
                    <div className='h-screen w-full'>
                        <div className='-mt-8'>
                            <FullSearch />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingPage;