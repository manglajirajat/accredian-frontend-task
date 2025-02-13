import heroImg from "../assets/heroImg.png";
import money from "../assets/money.png";

export default function HeroSection() {
    return (
        <div className="relative px-4 sm:px-8 lg:px-20">
            <div className="flex flex-col md:flex-row justify-between items-center mt-4 bg-blue-50 rounded-lg shadow-2xl">
                <div className="text-center md:text-left w-full md:w-1/2 flex flex-col justify-center p-8">
                    <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
                        Let's Learn & Earn
                    </h1>
                    <h3 className="font-normal text-2xl sm:text-3xl md:text-4xl mt-6">
                        Get a chance to win up to <span className="text-blue-500 font-bold">Rs. 15,000</span>
                    </h3>
                    <button className="bg-blue-500 text-white px-6 py-3 mt-8 rounded-lg w-40 mx-auto md:mx-0">
                        Refer Now
                    </button>
                </div>

                <div className="hidden sm:block md:w-1/2">
                    <img src={heroImg} alt="heroImg" className="w-full relative"/>
                </div>
            </div>

            <img src={money} className="absolute lg:left-25 top-4 left-5 lg:w-24 w-16 rotate-180"/>
            <img src={money} className="absolute lg:right-20 top-0 right-10 w-16 lg:w-20 lg:w-24"/>
            <img src={money} className="absolute lg:top-8 lg:left-155 bottom-4 left-8 w-16 lg:w-20 lg:w-24 z-10 md:block"/>
            <img src={money} className="absolute right-10 bottom-4 lg:bottom-20 w-16 lg:w-20 lg:w-24 rotate-180"/>
            <img src={money} className="absolute bottom-8 right-150 w-16 lg:w-20 lg:w-24 rotate-180 hidden md:block"/>
        </div>
    );
}
