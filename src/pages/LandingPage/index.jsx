// Imported Components from the components folder
import { Button } from "@components"
import heroImg from "@images/hero.png"

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="container px-4 lg:px-8">
                <div className="h-screen md:w-screen flex relative">
                    <div className="w-full flex flex-col md:justify-center ">
                        <h1 className="text-5xl leading-snug font-semibold md:font-normal md:text-8xl md:leading-tight">
                            Find Perfect<br /> Rental Homes<br /> in No Time
                        </h1>
                        <p className="md:max-w-96 flex flex-wrap leading-normal mt-3">We are the best rental home service that promises to shift you into your new home on the same day.</p>
                        <span className="mt-10">

                            <Button
                                size='lg'
                                shape='round'
                            >
                                See How it Works!
                            </Button>
                        </span>
                    </div>
                    <img src={heroImg} alt="hero" className="hidden md:block absolute bottom-0 right-0 h-1/2 md:h-fit md:w-3/5" />
                </div>
            </div>
        </div>
    );
};

export default LandingPage;