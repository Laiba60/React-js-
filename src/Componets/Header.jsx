import { useNavigate } from "react-router-dom";
import rectangle1 from "/images/rectangle1.png";
import rectangle2 from "/images/rectangle2.png";
import rectangle3 from "/images/rectangle3.png";
import rectangle4 from "/images/rectangle4.png";
import rectangle5 from "/images/rectangle5.png";
import rectangle6 from "/images/rectangle6.png";
import rectangle7 from "/images/rectangle7.png";
import rectangle8 from "/images/rectangle8.png";
import rectangle9 from "/images/rectangle9.png";

const Header = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-950 to-blue-800 text-white">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 sm:p-6">
        <div className="text-2xl font-bold">Password Manager</div>

        {/* Search Bar - Visible on Tablet & Desktop */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden sm:block w-48 sm:w-64 px-4 py-2 rounded-lg bg-blue-900 border border-blue-950 text-white focus:outline-none"
        />

        {/* Navigation Links */}
        <nav className="hidden sm:flex gap-x-6">
          <button className="text-white" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="bg-blue-500 text-black px-4 py-2 rounded-lg">
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left p-6 sm:p-10">
        <div className="max-w-lg">
          <span className="px-4 py-1 bg-blue-900 text-sm rounded-full">
            Cross-platform Password Manager
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mt-4">
            Secure Your Systems with the Ultimate Password Manager
          </h1>
          <p className="mt-4 text-gray-300">
            Store and auto-fill your passwords securely in a tracker-free, ad-free, and open-source way.
          </p>
          <button className="mt-6 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-black font-semibold rounded-lg">
            Get Started
          </button>
        </div>

        {/* Image Container */}
        <div className="relative mt-10 md:mt-0 w-48 sm:w-64 h-48 sm:h-64 flex items-center justify-center">
          <div className="w-32 sm:w-40 h-32 sm:h-40 bg-gray-500 rounded-lg flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/565/565547.png"
              alt="Lock Icon"
              className="w-12 sm:w-16 h-12 sm:h-16 absolute"
            />
          </div>

          {/* Floating Security Icons */}
          <img src={rectangle1} alt="Security Icon 1" className="absolute -top-4 left-6 w-8 sm:w-12 h-8 sm:h-12" />
          <img src={rectangle2} alt="Security Icon 2" className="absolute -top-4 right-6 w-8 sm:w-12 h-8 sm:h-12" />
          <img src={rectangle3} alt="Security Icon 3" className="absolute left-0 bottom-8 w-8 sm:w-12 h-8 sm:h-12" />
          <img src={rectangle4} alt="Security Icon 4" className="absolute right-0 bottom-8 w-8 sm:w-12 h-8 sm:h-12" />
          <img src={rectangle5} alt="Security Icon 5" className="absolute bottom-0 w-8 sm:w-12 h-8 sm:h-12" />
          <img src={rectangle6} alt="Security Icon 6" className="absolute top-4 left-5 w-8 sm:w-12 h-8 sm:h-12" />
          <img src={rectangle7} alt="Security Icon 7" className="absolute top-10 right-5 w-8 sm:w-12 h-8 sm:h-12" />
          <img src={rectangle8} alt="Security Icon 8" className="absolute bottom-5 left-5 w-8 sm:w-12 h-8 sm:h-12" />
          <img src={rectangle9} alt="Security Icon 9" className="absolute bottom-3 right-5 w-8 sm:w-12 h-8 sm:h-12" />
        </div>
      </section>
    </div>
  );
};

export default Header;
