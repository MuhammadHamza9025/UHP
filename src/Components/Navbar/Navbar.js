import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import uhp_logo from "../../Assests/uhp_logo2.png";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai"; // Search and clear icons
import uet from "../../Assests/uet.jpeg";

const Navbar = () => {
  const [filterText, setFilterText] = useState("");
  const [text, setText] = useState(""); // State to hold input text
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const array = [
    {
      id: 1,
      pic: uet,
      name: "Ali Institute of Education",
      description:
        "The Ali Institute of Education (AIE) was established in 1992 by a distinguished family trust, with the primary objective of providing effective teachers to the schools of Pakistan.",
      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
    {
      id: 2,
      pic: uet,
      name: "Al-Karam International Institute, Bhera",
      description:
        "Al-Karam International University, Bhera A Federal Chartered University. It is Recognized & Accredited by Higher Education Commission (HEC) & Pakistan Bar Council (PBC).",
      Sector: "Private",
      Field: "Engineering",
      Ranking: "601-800",
      Dept: 20,
    },
  ];

  // Filter the array when filterText changes
  const filteredArray = filterText
    ? array.filter(
        (e) =>
          (e.name && e.name.toLowerCase().includes(filterText)) ||
          (e.Sector && e.Sector.toLowerCase().includes(filterText)) ||
          (e.description && e.description.toLowerCase().includes(filterText))
      )
    : array;

  // Handle changes for both `text` and `filterText`
  const handleSearchChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue); // Update `text`
    setFilterText(inputValue.toLowerCase()); // Update `filterText`
    navigate(`/search?category=${encodeURIComponent(inputValue)}`); // Update URL with search query
  };

  // Handle the Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && text) {
      navigate(`/search?category=${encodeURIComponent(text)}`);
    }
  };

  // Clear the search input
  const handleClear = () => {
    setText("");
  };

  // Ensure that filteredArray updates when filterText changes
  useEffect(() => {
    // This is just a sample side effect, update based on your requirements
    if (filterText) {
      console.log("Filtering based on:", filterText);
    }
  }, [filterText]); // Only depend on filterText

  return (
    <div className="sticky top-0 z-50 p-4 bg-teal-500 shadow-xl">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        {/* Logo and Navigation */}
        <div className="flex items-center">
          <img src={uhp_logo} alt="Company Logo" className="w-16 h-16" />
        </div>
        <div className={`md:flex space-x-8 ${menuOpen ? "block" : "hidden"}`}>
          <Link
            to="/"
            className="text-lg font-medium text-white transition duration-300 ease-in-out hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-white transition duration-300 ease-in-out hover:text-yellow-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium text-white transition duration-300 ease-in-out hover:text-yellow-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium text-white transition duration-300 ease-in-out hover:text-yellow-300"
          >
            Contact
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative w-96">
          <input
            type="text"
            placeholder="Search University"
            value={text} // The value is now tied to `text`
            onChange={handleSearchChange} // Handles updates for both `text` and `filterText`
            onKeyDown={handleKeyDown}
            className="w-full py-3 pl-10 pr-12 text-gray-700 placeholder-gray-400 transition duration-300 ease-in-out bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <AiOutlineSearch
            className="absolute text-gray-500 transform -translate-y-1/2 left-3 top-1/2"
            size={20}
          />
          {text && (
            <AiOutlineClose
              className="absolute text-gray-500 transform -translate-y-1/2 cursor-pointer right-3 top-1/2"
              size={20}
              onClick={handleClear}
            />
          )}
        </div>

        {/* Login Button */}
        <div>
          <Link
            to="/login"
            className="px-6 py-2 font-medium text-white transition duration-300 ease-in-out bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-500"
          >
            Login
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white transition duration-300 ease-in-out hover:text-yellow-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="flex flex-col items-center mt-4 space-y-4 md:hidden">
          <Link
            to="/"
            className="text-lg font-medium text-white transition duration-300 ease-in-out hover:text-yellow-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-lg font-medium text-white transition duration-300 ease-in-out hover:text-yellow-300"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-lg font-medium text-white transition duration-300 ease-in-out hover:text-yellow-300"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-lg font-medium text-white transition duration-300 ease-in-out hover:text-yellow-300"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
