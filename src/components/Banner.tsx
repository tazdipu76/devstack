
import GetStartBtn from "./GetStartBtn";
import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className=" flex justify-between items-center p-6">

            {/* Left side */}
            <div>
                <h1 className="text-4xl font-bold">
                    Build Your Ideal <br />
                   <span className="bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
  Development Stack
</span>
                </h1>

                <p className="mt-4 text-gray-600">
                    Explore frontend, backend, database, and tooling options,
                    <br />
                    compare them side by side, and put together the stack that fits your
                    <br />
                    next project.
                </p>

                <div className="mt-5">
                    <GetStartBtn />
                </div>
            </div>

            {/* Right side */}
            <div>
                <img
                    src={bannerStack}
                    alt="Development stack"
                    className="w-full max-w-md"
                />
            </div>

        </div>
    );
};

export default Banner;
