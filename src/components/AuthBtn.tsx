const AuthBtn = () => {
    return (
        <div className="flex items-center gap-2 md:gap-3">
            {/* Sign In Button */}
            <button className="px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm text-gray-700 hover:text-black font-medium transition-colors">
                Sign In
            </button>

            {/* Sign Up Button */}
            <button className="px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl text-white font-medium shadow-sm transition-all hover:opacity-90">
                Sign Up
            </button>
        </div>
    );
};

export default AuthBtn;