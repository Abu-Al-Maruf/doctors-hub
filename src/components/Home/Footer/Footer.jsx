import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import logo from '../../../assets/logo.png';
import { Link } from 'react-router';
const Footer = () => {
    return (
        <footer className="px-4 sm:px-6 md:px-12 lg:px-20 bg-gray-800 text-gray-300 py-10">
            <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
                {/* Logo and Text */}
                <div className="flex flex-col items-center gap-3    ">
                    <Link to="/">
                        <img className="w-20" src={logo} alt="logo" />
                    </Link>

                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-blue-400 hover:shadow-3d active:shadow-3d">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-blue-400 hover:shadow-3d active:shadow-3d">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-blue-400 hover:shadow-3d active:shadow-3d">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-blue-400 hover:shadow-3d active:shadow-3d">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400">Home</a></li>
                        <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-400">Services</a></li>
                        <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-400">Book Appointment</a></li>
                    </ul>
                </div>

                {/* Our Services */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-400">General Checkup</a></li>
                        <li><a href="#" className="hover:text-blue-400">Pediatrics</a></li>
                        <li><a href="#" className="hover:text-blue-400">Cardiology</a></li>
                        <li><a href="#" className="hover:text-blue-400">Orthopedics</a></li>
                        <li><a href="#" className="hover:text-blue-400">Diagnostics</a></li>
                    </ul>
                </div>

                {/* Working Hours */}
                <div>
                    <h3 className="text-white text-lg font-semibold mb-4">Working Hours</h3>
                    <ul className="space-y-2">
                        <li className="text-green-500">Monday - Friday: 8:00 AM - 8:00 PM</li>
                        <li className="text-green-500">Saturday: 9:00 AM - 5:00 PM</li>
                        <li className="text-red-500">Sunday: Closed</li>
                    </ul>
                    <p className="text-sm mt-4">
                        <span className="font-bold text-blue-500">Emergency:</span> 24/7 Available
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
                <p>&copy; 2024 Doctor's Hub. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
