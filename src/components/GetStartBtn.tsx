
const GetStartBtn = () => {
  return (
    <div className="flex  items-center gap-3">
      <button className="whitespace-nowrap rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-2.5 text-[clamp(12px,1.2vw,16px)] font-medium text-white shadow-sm transition-all">
        Explore Technologies
      </button>

      <button className="whitespace-nowrap rounded-xl border border-gray-200 bg-white px-6 py-2.5 text-[clamp(12px,1.2vw,16px)] font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50">
        Learn More
      </button>
    </div>
  );
};

export default GetStartBtn;
