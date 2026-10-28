const GetStartBtn = () => {
    return (
        <div className="flex items-center gap-3">
           
            <button className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-xl shadow-sm transition-all">
                Explore Technologies
            </button>

          
            <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-medium rounded-xl shadow-sm hover:bg-gray-50 transition-all">
                Learn More
            </button>
        </div>
    );
};

export default GetStartBtn;