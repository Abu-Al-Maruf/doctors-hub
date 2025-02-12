import { Link, useNavigate, useLocation, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { FaBars, FaCaretDown, FaCaretUp, FaTimes } from 'react-icons/fa';
import { useEffect, useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef(null);
  const lastScrollY = useRef(0);
  const { user, logOut } = useAuth();
  const navigate = useNavigate()
  const location = useLocation();
  const [isAdmin] = useAdmin()
  // const isAdmin = true

  const handleLogout = async () => {
    await logOut();
    navigate('/');
    toast.success('Logged out successfully!');
  };
  // handle when scroll down navbar will hidden and when scroll up navbar will show
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        if (window.scrollY > lastScrollY.current) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // handle when click outside of navbar menu will close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  useEffect(() => {
    setIsVisible(true);
  }, [location]);

  const navLinks = <>
    <li>
      <NavLink
        to="/"
        className={({ isActive }) => `block py-2 px-3 ${isActive ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
        aria-current="page"
      >
        Home
      </NavLink>
    </li>
    <li>
      <button
        id="dropdownDoctorsHubLink"
        data-dropdown-toggle="dropdownDoctorsHub"
        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        Patient Information
        {
          isDropdownOpen ? <FaCaretUp className="w-5 h-5 pl-2" /> : <FaCaretDown className="w-5 h-5 pl-2" />
        }
      </button>
      {/* Dropdown menu  */}
      <div
        id="dropdownDoctorsHub"
        className={`z-50 ${isDropdownOpen ? 'block' : 'hidden'} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
      >
        <ul
          className="py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDoctorsHubLink"
        >
          <li>
            <Link
              to="/doctor-profile"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Provider Profile
            </Link>
          </li>
          <li>
            <button
              id="doubleDropdownButton"
              data-dropdown-toggle="doubleDropdown"
              data-dropdown-placement="right-start"
              type="button"
              className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Patient Services
              <FaCaretDown className="w-5 h-5 pl-2" />
            </button>
            <div
              id="doubleDropdown"
              className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="doubleDropdownButton"
              >
                <li>
                  <Link
                    to="/patient-overview"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Patient Overview
                  </Link>
                </li>
                <li>
                  <Link
                    to="/appointment-scheduling"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Appointment Management
                  </Link>
                </li>
                <li>
                  <Link
                    to="/medical-history"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Health Records
                  </Link>
                </li>
                <li>
                  <Link
                    to="/prescription-management"
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Prescription Services
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              to="/medical-research"
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Health Research
            </Link>
          </li>
        </ul>

      </div>
    </li>
    <li>
      <NavLink
        to="/appoinment"
        className={({ isActive }) => `block py-2 px-3 ${isActive ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
      >
        Appoinment
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about-us"
        className={({ isActive }) => `block py-2 px-3 ${isActive ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
      >
        About Us
      </NavLink>
    </li>


    {user && isAdmin && (
      <li>
        <NavLink
          to="/dashboard/admin-home"
          className={({ isActive }) => `block py-2 px-3 ${isActive ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
        >
          Dashboard
        </NavLink>
      </li>
    )}

    {user && !isAdmin && (
      <li>
        <NavLink
          to="/dashboard/user-home"
          className={({ isActive }) => `block py-2 px-3 ${isActive ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
        >
          Dashboard
        </NavLink>
      </li>
    )}


    <li>
      {
        user ?
          <NavLink
            onClick={handleLogout}
            to="/"
            className={({ isActive }) => `block py-2 px-3 ${isActive ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
          >
            Logout
          </NavLink> : <NavLink
            to="/login"
            className={({ isActive }) => `block py-2 px-3 ${isActive ? 'text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent' : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'}`}
          >
            Login
          </NavLink>
      }
    </li>

  </>



  return (
    <nav className={`px-4 sm:px-6 md:px-12 lg:px-20 sticky top-0 left-0 right-0 z-20 bg-[#EBEAFF] shadow-lg transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-[105%]'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4" ref={menuRef}>
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="w-16" alt="Flowbite Logo" />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 duration-300"
          aria-controls="navbar-multi-level"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FaTimes className="w-6 h-6" />
          ) : (
            <FaBars className="w-6 h-6" />
          )}
        </button>
        <div
          className={`${isMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto duration-300`}
          id="navbar-multi-level"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navLinks}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
