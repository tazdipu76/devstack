import GetStartBtn from "./GetStartBtn";
import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center  p-6 text-center lg:text-left">

            {/* Left side */}
            <div className="lg:ml-6 flex flex-col items-center lg:items-start">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                    Build Your Ideal <br />
                    <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                        Development Stack
                    </span>
                </h1>

                <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl">
                    Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
                </p>


                <div className="mt-6 flex flex-col md:flex-row justify-center lg:justify-start items-center gap-3 w-full md:w-auto">

                    <GetStartBtn />
                </div>
            </div>

            {/* Right side */}


            <img
                src={bannerStack}
                alt="Development stack"
                className="w-full max-w-sm md:max-w-md object-contain"
            />
        </div>
    );
};

export default Banner;