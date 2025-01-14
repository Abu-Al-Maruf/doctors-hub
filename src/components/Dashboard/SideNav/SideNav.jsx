import React from 'react';
import { FaHome, FaCalendarAlt, FaCog, FaStethoscope, FaClipboardList, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SideNav = () => {
    return (
        <div className="h-screen text-white transition-all duration-300">
            <ul className="space-y-4 mt-8">
                <li>
                    <Link
                        to="/dashboard"
                        className="flex items-center gap-4 p-4 hover:bg-gray-700 rounded-md"
                    >
                        <FaHome />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/appoinments"
                        className="flex items-center gap-4 p-4 hover:bg-gray-700 rounded-md"
                    >
                        <FaCalendarAlt />
                        Appointments
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/all-users"
                        className="flex items-center gap-4 p-4 hover:bg-gray-700 rounded-md"
                    >
                        <FaUsers />
                        All Users
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/add-doctor"
                        className="flex items-center gap-4 p-4 hover:bg-gray-700 rounded-md"
                    >
                        <FaStethoscope />
                        Add a Doctor
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/manage-doctors"
                        className="flex items-center gap-4 p-4 hover:bg-gray-700 rounded-md"
                    >
                        <FaClipboardList />
                        Manage Doctors
                    </Link>
                </li>
                <li>
                    <Link
                        to="/dashboard/settings"
                        className="flex items-center gap-4 p-4 hover:bg-gray-700 rounded-md"
                    >
                        <FaCog />
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
