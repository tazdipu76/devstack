import AuthBtn from "./AuthBtn";
import logo from "../assets/logo-text.png";

const Navber = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4 py-4">
        {/* Logo */}
        <img
          src={logo}
          alt="Logo"
          className="h-8 w-auto"
        />

        {/* Nav Links */}
        <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-600">
          <li className="cursor-pointer hover:text-purple-600">Home</li>
          <li className="cursor-pointer hover:text-purple-600">Technologies</li>
          <li className="cursor-pointer hover:text-purple-600">Projects</li>
          <li className="cursor-pointer hover:text-purple-600">About</li>
          <li className="cursor-pointer hover:text-purple-600">Contact</li>
        </ul>

        {/* Auth Button */}
        <AuthBtn />
      </div>
    </nav>
  );
};

export default Navber;